import { defineFunction } from "@aws-amplify/backend";

export const categorizeExpense = defineFunction({
  name: "categorizeExpense",
  entry: "./handler.ts",
});
