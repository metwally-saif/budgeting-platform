import { a } from "@aws-amplify/backend";

export const HistoryExpense = a
  .model({
    id: a.id(),
    userId: a.string().required(), // Reference to the User
    user: a.belongsTo("User", "userId"), // The User
    expenseId: a.string().required(), // Reference to the main Expense
    expense: a.belongsTo("Expense", "expenseId"), // The main Expense
    date: a.date().required(), // The date this record applies to
    assigned: a.float().required(), // The assigned amount
    expenseTypeId: a.string().required(), // Reference to the Expense Type
    expenseType: a.belongsTo("ExpenseType", "expenseTypeId"),
    category: a.enum([
      "Housing",
      "Transportation",
      "Food",
      "Utilities",
      "Insurance",
      "Healthcare",
      "Savings",
      "Personal",
      "Recreation",
      "Debt",
      "Miscellaneous",
    ]),
  })
  .identifier(["id"])
  .secondaryIndexes((index) => [index("userId")])
  .authorization((allow) => [allow.authenticated().to(["read"])]);
