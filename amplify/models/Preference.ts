import { a } from "@aws-amplify/backend";

export const Preference = a.model({
    id: a.id(),
    userId: a.string().required(),
    user: a.belongsTo("User", "userId"),

    // Preference Details
    currency: a.enum(["USD", "EUR"]),
    monthlyIncome: a.float(),
    monthlyExpense: a.float(),
    savingsGoal: a.float(),
    savingsBalance: a.float(),
    hasEmergencyFund: a.boolean(),
    emergencyFund: a.float(),
    emergencyFundGoal: a.float(),
    hasRetirementFund: a.boolean(),
    retirementFund: a.float(),
    retirementFundGoal: a.float(),
    hasDebt: a.boolean(),
    debt: a.float(),
    debtGoal: a.float(),


    // Preference Tracking
    lastUpdated: a.date(),

    // Preference Budgeting
    // budgeted: a.boolean().default(false),
    // budgetId: a.string(),
    // budget: a.belongsTo("Budget", "budgetId"),
})
.identifier(["userId"])
.authorization((allow) => [
    allow.owner(),
    allow.groups(["Admin"]),
]);
