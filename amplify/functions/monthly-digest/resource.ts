import { defineFunction } from "@aws-amplify/backend";

export const monthlyDigest = defineFunction({
  name: "monthly-digest",
  entry: "./handler.ts",
  schedule: "0 0 1 * ? *",
});
