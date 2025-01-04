import { a } from "@aws-amplify/backend";

export const HistoryExpense = a
  .model({
    id: a.id(),
    userId: a.string().required(), // Reference to the User
    user: a.belongsTo("User", "userId"), // The User
    expenseId: a.string().required(), // Reference to the main Expense
    expense: a.belongsTo("Expense", "expenseId"), // The main Expense
    date: a.date().required(), // The date this record applies to
    amount: a.float().required(), // The assigned amount
  })
  .identifier(["id"])
  .secondaryIndexes((index) => [index("userId")])
  .authorization((allow) => [allow.authenticated().to(["read"])]);
