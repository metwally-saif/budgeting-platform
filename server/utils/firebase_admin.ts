import admin from "firebase-admin";
// serviceAccount is a JSON object that contains the private key and other credentials for the Firebase Admin SDK
import serviceAccount from "./budgeting-platform-firebase-adminsdk-4hs0r-c2216b18f1.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export { admin };
