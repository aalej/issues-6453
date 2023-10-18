import { debug } from "firebase-functions/logger";
import { onDocumentWritten } from "firebase-functions/v2/firestore";

export const modifyUser = onDocumentWritten(
  {
    document: "users/{userId}",
    secrets: ["SECRET_MESSAGE"],
  },
  (event) => {
    debug("SECRET_MESSAGE", process.env.SECRET_MESSAGE);
    debug("document", event.data.before);
    debug("oldDocument", event.data.after);
  }
);
