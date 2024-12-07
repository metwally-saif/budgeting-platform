import { a } from "@aws-amplify/backend";

export const Expense = a
  .model({
    id: a.id(),
    userId: a.string().required(),
    user: a.belongsTo("User", "userId"),

    // Expense Details
    name: a.string(),
    amount: a.float(),
    categoryId: a.string(),
    category: a.belongsTo("ExpenseCategory", "categoryId"),
    date: a.date(),
    recurring: a.boolean().default(false),
    recurringFrequency: a.enum(["Daily", "Weekly", "Monthly", "Yearly"]),
    recurringEndDate: a.date(),

    // Expense Notes
    notes: a.string(),

    // Expense Tracking
    paid: a.boolean().default(false),
    paymentMethod: a.string(),
    paymentDate: a.date(),

    // Expense Budgeting
    // budgeted: a.boolean().default(false),
    // budgetId: a.string(),
    // budget: a.belongsTo("Budget", "budgetId"),
  })
  .identifier(["userId"])
  .authorization((allow) => [allow.owner(), allow.groups(["Admin"])]);
