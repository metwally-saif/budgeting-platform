import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { User, Preference, Expense, ExpenseType } from "../models";
import { postConfirmation } from "../auth/postConfirmation/resource";
import { categorizeExpense } from "../functions";

const schema = a
  .schema({
    User,
    Preference,
    Expense,
    ExpenseType,
  })
  .authorization((allow) => [
    allow.resource(postConfirmation),
    allow.resource(categorizeExpense),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
