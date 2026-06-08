import { router } from "@/routes/_router.ts";
import "@/routes/home.tsx";

import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());
app.route("/", router);

export default app;
