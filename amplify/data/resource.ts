import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { User, Preference, Expense, ExpenseCategory } from "../models";
import { postConfirmation } from "../auth/postConfirmation/resource";

const schema = a
  .schema({
    User,
    Preference,
    ExpenseCategory,
    Expense,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
