import admin from "firebase-admin";

import serviceAccount from "./budgeting-platform-firebase-adminsdk-4hs0r-c2216b18f1.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export { admin };
