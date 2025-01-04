import type { Handler } from "aws-lambda";
import { type Schema } from "data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/monthly-digest";

// GraphQL queries + mutations
import { listExpenses } from "graphql/queries";
import { createHistoryExpense } from "graphql/mutations";
import { Expense, CreateHistoryExpenseInput } from "graphql/API";

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

/**
 * Helper to create a history expense record.
 * This function is idempotent.
 *
 * @param expenses The list of expenses to create history records for.
 */
async function createHistoryExpenses(expense: Expense): Promise<unknown> {
  if (!expense) {
    console.error("Expense is null or undefined:");
    throw new Error("Invalid expense object passed to createHistoryExpenses.");
  }
  if (!expense.assigned) {
    console.error("Expense is missing assigned amount:");
    return;
  }

  const input: CreateHistoryExpenseInput = {
    userId: expense.userId ?? "",
    expenseId: expense.id,
    date: formatToAWSDate(new Date()),
    amount: expense.assigned ? expense.assigned : 0,
  };

  return await client.graphql({
    query: createHistoryExpense,
    variables: { input },
  });
}

/**
 * Formats a Date object to 'YYYY-MM-DD' as required by AWSDate.
 */
function formatToAWSDate(date: Date): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date object passed to formatToAWSDate");
  }
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const handler: Handler = async () => {
  try {
    // 1. Fetch all expenses (handling pagination).
    const expenses: Expense[] = await fetchAllExpenses();

    // 2. Process each expense according to the rules.
    const operations: Promise<unknown>[] = [];

    for (const exp of expenses) {
      if (!exp.id) continue; // Skip any malformed items

      // 2.1. Create a history record for the expense.
      operations.push(createHistoryExpenses(exp));
    }

    // 3. Wait for all operations to complete
    await Promise.all(operations);
    console.log("All operations completed successfully");
    return {
      statusCode: 200,
      body: JSON.stringify("Success"),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify("Internal Server Error"),
    };
  }
};
