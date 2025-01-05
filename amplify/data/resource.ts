import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import {
  User,
  Preference,
  Expense,
  ExpenseType,
  BankAccount,
  HistoryExpense,
  HistoryBankAccount,
} from "../models";
import { postConfirmation } from "../auth/postConfirmation/resource";
import { dailyDigest, monthlyDigest } from "../functions";

const schema = a
  .schema({
    User,
    Preference,
    Expense,
    ExpenseType,
    BankAccount,
    HistoryExpense,
    HistoryBankAccount,
  })
  .authorization((allow) => [
    allow.resource(postConfirmation),
    allow.resource(dailyDigest),
    allow.resource(monthlyDigest),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
