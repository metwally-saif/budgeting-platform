import type { Handler } from "aws-lambda";
import { type Schema } from "data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/daily-digest";

// GraphQL queries + mutations
import { listExpenses } from "graphql/queries";
import { updateExpense } from "graphql/mutations";
import {
  Expense,
  ExpenseRecurringFrequency,
  UpdateExpenseInput,
} from "graphql/API";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* no-op */
        },
      },
    },
  },
);

const client = generateClient<Schema>({
  authMode: "iam",
});

/**
 * Helper to determine if an expense is due.
 * "Due" means dueDate <= "today" (in UTC).
 */
function isExpenseDue(dueDate?: string): boolean {
  if (!dueDate) return false;

  const now = new Date();
  // "Today" in UTC with time set to 00:00:00
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  const eDate = new Date(dueDate);

  // If the `dueDate` year is in the past, it's due
  if (eDate.getUTCFullYear() < today.getUTCFullYear()) return true;

  // If the year matches but the date is today or earlier, it's due
  if (eDate.getUTCFullYear() === today.getUTCFullYear() && eDate <= today)
    return true;

  // Otherwise, it's not due
  return false;
}

/**
 * Formats a Date object to 'YYYY-MM-DD' as required by AWSDate.
 */
function formatToAWSDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Returns the "next due date" based on the recurringFrequency.
 * If it's "Daily", we add 1 day to the given dueDate.
 * If "Weekly", we add 7 days, etc.
 */
function getNextRecurringDueDate(
  dueDate: string | null | undefined,
  freq: ExpenseRecurringFrequency | null | undefined,
): string | null {
  if (!dueDate || !freq) return null;

  const now = new Date();
  let date = new Date(dueDate);

  // Ensure the date starts from today if it's in the past
  if (date <= now) {
    date = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
    );
  }

  switch (freq) {
    case "Daily":
      date.setUTCDate(date.getUTCDate() + 1);
      break;
    case "Weekly":
      date.setUTCDate(date.getUTCDate() + 7);
      break;
    case "Monthly":
      date.setUTCMonth(date.getUTCMonth() + 1);
      break;
    case "Yearly":
      date.setUTCFullYear(date.getUTCFullYear() + 1);
      break;
    default:
      return null;
  }

  // If the calculated `dueDate` is still in the past or this year, adjust the year
  if (date <= now) {
    date.setUTCFullYear(now.getUTCFullYear() + 1);
  }

  return formatToAWSDate(date);
}

/**
 * Recursively fetches all expenses, handling pagination if needed.
 */
async function fetchAllExpenses(): Promise<Expense[]> {
  const allExpenses: Expense[] = [];
  let nextToken: string | null | undefined = null;
  let res;
  do {
    res = await client.graphql({
      query: listExpenses,
      variables: {
        limit: 100,
        nextToken,
      },
    });

    const items = res?.data?.listExpenses?.items ?? [];
    nextToken = res?.data?.listExpenses?.nextToken;

    for (const item of items) {
      if (item) allExpenses.push(item);
    }
  } while (nextToken);

  return allExpenses;
}

export const handler: Handler = async () => {
  try {
    // 1. Fetch all expenses (handling pagination).
    const expenses: Expense[] = await fetchAllExpenses();

    // 2. Process each expense according to the rules.
    const operations: Promise<unknown>[] = [];

    for (const exp of expenses) {
      if (!exp.id) continue; // Skip any malformed items

      const {
        id,
        recurring,
        recurringFrequency,
        dueDate,
        nextMonthIWantToSetAside = 0,
      } = exp;

      // 3. If the current dueDate is in the past or today, handle it
      if (dueDate && isExpenseDue(dueDate)) {
        if (recurring) {
          // Recurring expense => set newDueDate, set date to "today"
          const newDueDate = getNextRecurringDueDate(
            dueDate,
            recurringFrequency,
          );
          if (!newDueDate) {
            console.warn(
              `Skipping expense ${id}: invalid freq or missing dueDate.`,
            );
            continue;
          }

          // Move nextMonthIWantToSetAside -> assigned, reset nextMonthIWantToSetAside
          const newAssigned = nextMonthIWantToSetAside;
          const newNextMonth = 0;

          // The "date" we store can be the "today" in UTC
          const today = formatToAWSDate(new Date());
          const newExpense: UpdateExpenseInput = {
            id,
            date: today,
            dueDate: newDueDate,
            assigned: newAssigned,
            nextMonthIWantToSetAside: newNextMonth,
          };
          operations.push(
            client.graphql({
              query: updateExpense,
              variables: {
                input: newExpense,
              },
            }),
          );
        } else {
          // Non-recurring => remove targetAmount and dueDate 
          const newExpense: UpdateExpenseInput = {
            id,
            targetAmount: null,
            hasTarget: false,
            assigned: 0,
            dueDate: null,
          };
          operations.push(
            client.graphql({
              query: updateExpense,
              variables: {
                input: newExpense,
              },
            }),
          );
        }
      }
      // If not due, do nothing
    }

    await Promise.all(operations);

    console.log("Daily cron logic completed successfully.");

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
        details: `Processed ${expenses.length} expenses.`,
      }),
    };
  } catch (error) {
    console.error("Error running daily cron:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
