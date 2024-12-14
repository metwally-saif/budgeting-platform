import { a } from "@aws-amplify/backend";

export const User = a
  .model({
    id: a.id(),
    profileOwner: a.string().required(),
    email: a.string(),
    firstName: a.string(),
    lastName: a.string(),
    role: a.string().authorization((allow) => [allow.groups(["Admin"])]),
    preference: a.hasOne("Preference", "userId"),
    expenses: a.hasMany("Expense", "userId"),
    expenseTypes: a.hasMany("ExpenseType", "userId"),
    bankAccounts: a.hasMany("BankAccount", "userId"),
  })
  .identifier(["profileOwner"])
  .authorization((allow) => [allow.owner(), allow.groups(["Admin"])]);
