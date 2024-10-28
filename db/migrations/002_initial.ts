import type { Knex } from "knex";

/**
 * The initial database schema (migration).
 * @see https://knexjs.org/#Schema
 */
export async function up(db: Knex) {
  // PostgreSQL extensions.
  // https://cloud.google.com/sql/docs/postgres/extensions
  await db.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await db.raw(`CREATE EXTENSION IF NOT EXISTS "hstore"`);
  await db.raw(`CREATE EXTENSION IF NOT EXISTS "citext"`);
  // await db.raw(`CREATE EXTENSION IF NOT EXISTS "pgvector"`);

  // User roles.
  // User accounts (excluding fields from the auth provider).

  //add column for user
  await db.schema.table("user", (table) => {
    table.string("role").notNullable().defaultTo("user");
  });

  // User workspaces/organizations.
}

/**
 * Rollback function for the migration.
 */
export async function down(db: Knex) {
  await db.schema.dropTableIfExists("workspace_member");
  await db.schema.dropTableIfExists("workspace");
  await db.schema.dropTableIfExists("user");
  await db.raw(`DROP TYPE IF EXISTS user_role`);
}

export const config = { transaction: true };
