// This file is used by Vite to start the HTTP server
// in development mode. It is not used in production.
//
// Usage example:
//   $ yarn vite-node --watch ./start.ts
//
import getPort, { portNumbers } from "get-port";

// Get the first available port number in the 8080..9000 range.
process.env.PORT = `${await getPort({ port: portNumbers(8080, 9000) })}`;
process.env.PGHOST = process.env.PGHOST ?? "";

let connector: {
  getOptions: (arg0: {
    instanceConnectionName: string;
    //
    // Usage example:
    //   $ yarn vite-node --watch ./start.ts
    //
    ipType: any;
  }) => any; close: () => void;
} | undefined= undefined;
const dbHost = process.env.PGHOST ?? "";

// Setup Cloud SQL Connector when database hostname


async function listen() {
  const module = await import("./index");
  return module.listen();
}

// Start the HTTP server.
let dispose = await listen();

// Automatically restart the server when the source code changes.
// https://vitejs.dev/guide/features.html#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept("/index.ts", async () => {
    await dispose?.();
    dispose = await listen();
  });
}

async function cleanUp() {
  await dispose?.();
  connector?.close();
  process.exit();
}

process.on("SIGINT", cleanUp);
process.on("SIGTERM", cleanUp);
