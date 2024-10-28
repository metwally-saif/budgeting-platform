import * as Db from "db/models";
import { db } from "../core";
import { createNewId } from "../core/utils";
import { builder } from "./builder";

export const User = builder.objectRef<User>("User");

const idCreator = createNewId(db, "user", 10);

User.implement({
  fields: (t) => ({
    id: t.exposeID("localId"),
    email: t.exposeString("email", { nullable: true }),
    emailVerified: t.exposeBoolean("emailVerified", { nullable: true }),
    displayName: t.exposeString("displayName", { nullable: true }),
    photoUrl: t.exposeString("photoUrl", { nullable: true }),
    locale: t.exposeString("locale", { nullable: true }),
    timeZone: t.exposeString("time_zone", { nullable: true }),
    disabled: t.exposeBoolean("disabled", { nullable: true }),
    createdAt: t.exposeString("createdAt", { nullable: true }),
    lastLoginAt: t.exposeString("lastLoginAt", { nullable: true }),
  }),
});

builder.queryField("user", (t) =>
  t.field({
    type: User,
    nullable: true,
    args: { id: t.arg.id({ required: false }) },
    async resolve(_, args, ctx): Promise<User> {
      const id = String(args.id);
      let user = await db.from<Db.User>("user").where("id", "=", id).first();

      // User account not found.
      if (!user) return null as unknown as User;

      // Create user record if it doesn't exist.
      if (!user) {
        user = await db
          .table<Db.User>("user")
          .insert({ id: id as Db.UserId })
          .returning("*")
          .first();
      }

      return {
        ...user,
        localId: id,
        id: id as Db.UserId,
        emailVerified: user.emailVerified as boolean,
      };
    },
  }),
);
const UserInput = builder.inputType("UserInput", {
  fields: (t) => ({
    email: t.string({ required: true }),
    displayName: t.string({ required: true }),
    photoUrl: t.string(),
    locale: t.string(),
    timeZone: t.string(),
  }),
});

builder.mutationField("createUser", (t) =>
  t.field({
    type: User, // Returns the newly created user
    args: {
      user: t.arg({ type: UserInput, required: true }), // Using the new input type
    },
    async resolve(_, args): Promise<User> {
      const newUser = await db
        .table<Db.User>("user")
        .insert({
          id: await idCreator(true),
          email: args.user.email,
          displayName: args.displayName,
          photoUrl: args.photoUrl,
          locale: args.locale,
          time_zone: args.timeZone,
          emailVerified: false,
        })
        .returning("*");
      return newUser;
    },
  }),
);

export interface User extends Db.UserInitializer {
  localId: string;
  email?: string | null;
  emailVerified?: boolean | null;
  displayName?: string | null;
  photoUrl?: string | null;
  disabled?: boolean | null;
  createdAt?: string | null;
  lastLoginAt?: string | null;
}

export interface UserInitializer extends Db.UserInitializer {
  localId: string;
}
