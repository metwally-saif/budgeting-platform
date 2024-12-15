import { a } from "@aws-amplify/backend";

export const Expense = a
  .model({
    id: a.id(),
    userId: a.string().required(),
    user: a.belongsTo("User", "userId"),

    expenseTypeId: a.string(),
    expenseType: a.belongsTo("ExpenseType", "expenseTypeId"),

    // Expense Details
    name: a.string(),
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
    hasTarget: a.boolean().default(false),
    amount: a.float(),
    targetAmount: a.float(),
    date: a.date(),
    recurring: a.boolean().default(false),
    recurringFrequency: a.enum(["Daily", "Weekly", "Monthly", "Yearly"]),
    nextMonthIWantToSetAside: a.float(),

    // Expense Notes
    notes: a.string(),

    dueDate: a.date(),

    assigned: a.float(),
  })
  .identifier(["id"])
  .secondaryIndexes((index) => [index("userId")])
  .authorization((allow) => [allow.owner(), allow.groups(["Admin"])]);
