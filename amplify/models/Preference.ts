import { a } from "@aws-amplify/backend";

export const Preference = a.model({
    id: a.id(),
    userId: a.string(),
    user: a.belongsTo("User", "userId"),
    }).authorization((allow) => [allow.guest()]);