import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/inggest/functions";

// create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later */
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion

  ],
});