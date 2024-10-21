

import DataLoader from "dataloader";
import { User } from "../schema/user";

export const userById = new DataLoader<string, User | null>(async (keys) => {
  // TODO: Load users by ID.
  return keys.map(() => null);
});
