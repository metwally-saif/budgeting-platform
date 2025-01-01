import { defineFunction } from "@aws-amplify/backend";

export const dailyDigest = defineFunction({
  name: "daily-digest",
  entry: "./handler.ts",
  schedule: "every day",
});
