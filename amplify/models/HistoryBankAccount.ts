import { a } from "@aws-amplify/backend";

export const HistoryBankAccount = a
  .model({
    id: a.id(),
    userId: a.string().required(),
    user: a.belongsTo("User", "userId"),
    bankAccountId: a.string().required(),
    bankAccount: a.belongsTo("BankAccount", "bankAccountId"),
    type: a.enum([
      "Checking",
      "Savings",
      "Cash",
      "Credit_Card",
      "Line_of_Credit",
    ]),
    name: a.string(),
    balance: a.float(),
    date: a.date(),
  })
  .identifier(["id"])
  .secondaryIndexes((index) => [index("userId")])
  .authorization((allow) => [allow.owner()]);
