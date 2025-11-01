import { Inngest } from "inngest";
import { serve } from "inngest/next";

const inngest = new Inngest({ name: "lovlii-app" });

// Example event handler (you can modify this)
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello" },
  async () => {
    console.log("Hello from Inngest!");
    return { message: "Success!" };
  }
);

export const POST = serve({ client: inngest }, [
  helloWorld
]);
