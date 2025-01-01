import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { User, Preference, Expense, ExpenseType, BankAccount } from "../models";
import { postConfirmation } from "../auth/postConfirmation/resource";
import { dailyDigest } from "../functions";

const schema = a
  .schema({
    User,
    Preference,
    Expense,
    ExpenseType,
    BankAccount,
  })
  .authorization((allow) => [
    allow.resource(postConfirmation),
    allow.resource(dailyDigest),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
