import http from "http";
import { createServerApplication } from "./app/index.js";
import { env } from "./env.js";

async function main() {
  try {
    const app = createServerApplication();
    const server = http.createServer(app);

    const PORT: number = env.PORT ? +env.PORT : 8080;

    server.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  } catch (error) {
    throw error;
  }
}

main();
