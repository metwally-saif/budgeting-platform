import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import {
  User,
  Preference,
  Expense,
  ExpenseType,
  BankAccount,
  HistoryExpense,
  HistoryBankAccount,
  PredictedExpense,
} from "../models";
import { postConfirmation } from "../auth/postConfirmation/resource";
import { dailyDigest, monthlyDigest } from "../functions";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import "@aws-sdk/crc64-nvme-crt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const promptFilePath = join(__dirname, "..", "prompts", "systemPrompt.txt");
const systemPrompt = readFileSync(promptFilePath, "utf8");

const schema = a
  .schema({
    User,
    Preference,
    Expense,
    ExpenseType,
    BankAccount,
    HistoryExpense,
    HistoryBankAccount,
    PredictedExpense,
    chat: a
      .conversation({
        aiModel: a.ai.model("Amazon Nova Micro"),
        systemPrompt: systemPrompt,
        tools: [
          {
            name: "Expense",
            model: a.ref("Expense"),
            modelOperation: "list",
            description: "List all expenses",
          },
          {
            name: "HistoryExpense",
            model: a.ref("HistoryExpense"),
            modelOperation: "list",
            description: "List all historical expenses",
          },
        ],
      })
      .authorization((allow) => allow.owner()),
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
