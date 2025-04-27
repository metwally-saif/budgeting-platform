import { a } from "@aws-amplify/backend";

export const PredictedExpense = a
  .model({
    id: a.id(),
    owner: a.string(), // Reference to the User
    user: a.belongsTo("User", "owner"), // The User
    date: a.date().required(), // Date of the predicted expense
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
    ]), // Category of the expense
    expenseTypeId: a.string(),
    expenseType: a.belongsTo("ExpenseType", "expenseTypeId"),
    predictedAmount: a.float(), // Predicted amount for the expense
  })
  .identifier(["id"]) // Identifier for the model
  .authorization((allow) => [allow.owner(), allow.groups(["Admin"])]) // Authorization rules
  .secondaryIndexes((index) => [index("owner")]); // Secondary index for userId
