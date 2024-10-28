import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  console.log("Seeding users...");
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: "test-erika",
      screen_name: "erika",
      email: "erika.pearson@example.com",
      email_verified: true,
      phone_number: "+14788078434",
      display_name: "Erika Pearson",
      created_at: new Date("2024-01-01T12:00:00Z"),
      last_login_at: new Date("2024-01-01T12:00:00Z"),
    },
    {
      id: "test-ryan",
      screen_name: "ryan",
      email: "ryan.hunt@example.com",
      email_verified: true,
      phone_number: "+16814758216",
      display_name: "Ryan Hunt",
      created_at: new Date("2024-01-02T12:00:00Z"),
      last_login_at: new Date("2024-01-02T12:00:00Z"),
    },
    // Add other users...
  ]);
}
