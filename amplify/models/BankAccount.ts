import { a } from "@aws-amplify/backend";

export const BankAccount = a
  .model({
    id: a.id(),
    userId: a.string().required(),
    user: a.belongsTo("User", "userId"),
    type: a.enum([
      "Checking",
      "Savings",
      "Cash",
      "Credit_Card",
      "Line_of_Credit",
    ]),
    name: a.string(),
    balance: a.float(),
  })
  .identifier(["id"])
  .secondaryIndexes((index) => [index("userId")])
  .authorization((allow) => [allow.owner()]);
