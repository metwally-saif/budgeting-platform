import {
  BankAccount,
  HistoryExpense,
  Expense,
} from "../../amplify/graphql/API";

/**
 * Helper function that returns:
 *   - The total user has now (bank accounts - current month expenses - past history expenses)
 *
 * @param bankAccounts All bank accounts in the system
 * @param expenses All expenses in the system
 * @param historyExpenses All history expenses in the system
 * @returns A number representing the total the user has now
 */
export function getUserFinancialStatus(
  bankAccounts: BankAccount[],
  expenses: Expense[],
  historyExpenses: HistoryExpense[],
): { totalBalance: number; userHasNow: number } {
  // 1. Determine the start of the current month
  const now = new Date();
  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // 2. Filter out only the history expenses from PAST months
  //    i.e. those strictly before startOfCurrentMonth
  const pastHistoryExpenses = historyExpenses.filter((he) => {
    const heDate = typeof he.date === "string" ? new Date(he.date) : he.date;
    return heDate < startOfCurrentMonth;
  });

  // 3. Calculate the sum of all past history expenses apart from the current month
  const sumPastHistoryExpenses = pastHistoryExpenses.reduce(
    (acc, exp) => acc + (exp.assigned || 0),
    0,
  );

  // 5. Sum current-month expenses
  const sumCurrentMonthExpenses = expenses.reduce(
    (acc, exp) => acc + (exp.assigned || 0),
    0,
  );

  // 6. Sum all bank account balances
  const totalBalance = bankAccounts.reduce(
    (sum, account) => sum + (account.balance || 0),
    0,
  );

  // 7. The total the user has now:
  //    totalBalance - (sumCurrentMonthExpenses + sumPastHistoryExpenses)
  const userHasNow =
    totalBalance - sumCurrentMonthExpenses - sumPastHistoryExpenses;

  return {
    totalBalance,
    userHasNow,
  };
}
