import { a } from "@aws-amplify/backend";

export const User = a.model({
    id: a.id(),
    username: a.string(),
    email: a.string(),
    password: a.string(),
    role: a.string(),
    preference: a.hasOne("Preference", "userId"),
    }).authorization((allow) => [allow.guest()]);


