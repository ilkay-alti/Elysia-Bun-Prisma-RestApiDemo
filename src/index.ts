import { Elysia } from "elysia";
import postsRoutes from "./routes/posts";
import swagger from "@elysiajs/swagger";
import logger from "./utils/logger";

const app = new Elysia();

app
  .use(
    swagger({
      documentation: {
        info: {
          title: "Elysia",
          description: "Elysia API Documentation",
          version: "1.0.0",
        },
      },
    })
  )
  .group("/api", (app) => app.use(postsRoutes))
  .listen(process.env.PORT || 3000);

logger.info(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
