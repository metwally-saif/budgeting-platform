import { createYoga } from "graphql-yoga";
import uWS from "uWebSockets.js";
import { db, env } from "./core";
import { authMiddleware } from "./middleware/authMiddleware";

// import { getIdToken } from "./core/auth";

import { schema } from "./schema";

/**
 * GraphQL API server middleware.
 * @see https://the-guild.dev/graphql/yoga-server/docs
 */
const yoga = createYoga({
  schema,
  logging: true,
  context: async (ctx) => {
    const user = await authMiddleware(ctx);
    return {
      ...ctx,
      user,
      db,
    };
  },
});

/**
 * High performance HTTP and WebSocket server based on uWebSockets.js.
 * @see https://github.com/uNetworking/uWebSockets
 */
const app = uWS
  .App()
  // GraphQL API endpoint.
  .any("/*", async (res, req) => {
    console.log("Received request:", req.getUrl());
    await yoga(res, req);
  });

/**
 * Starts the HTTP server.
 */
export function listen() {
  app.listen(env.PORT, () => {
    console.log(`Server listening on http://localhost:${env.PORT}/`);
  });

  return async () => {
    app.close();
    await db.destroy();
  };
}

// Start the server if running in a Cloud Run environment.
if (env.K_SERVICE) {
  const close = listen();
  process.on("SIGINT", () => close());
  process.on("SIGTERM", () => close());
}
