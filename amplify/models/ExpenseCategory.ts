import { a } from "@aws-amplify/backend";

export const ExpenseCategory = a.model({
    id: a.id(),
    name: a.enum(["Housing", "Transportation", "Food", "Utilities", "Insurance", "Healthcare", "Savings", "Personal", "Recreation", "Debt", "Miscellaneous"]),
    expenses: a.hasMany("Expense", "categoryId"),
})
.authorization((allow) => [
    allow.groups(["Admin"]),
]);
