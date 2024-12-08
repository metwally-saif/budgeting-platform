import { a } from "@aws-amplify/backend";

export const ExpenseType = a
  .model({
    id: a.id(),
    name: a.string().required(),
    expenses: a.hasMany("Expense", "expenseTypeId"),
    userId: a.string().required(),
    user: a.belongsTo("User", "userId"),
  })
  .identifier(["id"])
  .secondaryIndexes((index) => [index("userId")])
  .authorization((allow) => [allow.owner()]);
