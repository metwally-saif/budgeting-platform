import { YogaInitialContext } from "graphql-yoga";
import { admin } from "../utils/firebase_admin";

// Middleware to check authentication
export async function authMiddleware(ctx: YogaInitialContext) {
  console.log("Checking authentication...");
  const authHeader = ctx.request.headers.get("Authorization");
  let user: admin.auth.DecodedIdToken | null = null;

  if (!authHeader) {
    console.error("No Authorization header found");
    return null;
  }
  const token = authHeader.split(" ")[1]; // Extract the token from 'Bearer <token>'
  try {
    user = await admin.auth().verifyIdToken(token); // Verify Firebase token
    console.log("Authenticated user:", user);
  } catch (error) {
    console.error("Authentication error:", error);
  }

  return user;
}

export const permissions = {
  //protect all queries
  Query: {
    user: authMiddleware,
  },
};
