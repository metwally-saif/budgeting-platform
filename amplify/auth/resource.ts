import { defineAuth } from "@aws-amplify/backend";
import { postConfirmation } from "./postConfirmation/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    familyName: {
      mutable: true,
      required: true,
    },
    givenName: {
      mutable: true,
      required: true,
    },
  },
  groups: ["Admin", "User"],
  triggers: {
    postConfirmation,
  },
});
