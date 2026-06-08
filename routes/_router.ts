import renderer from "@/routes/_layout.tsx";

import { type Handler, Hono } from "hono";

export const router = new Hono();

router.use(renderer);

export function createRoute(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  path: string,
  handler: Handler,
) {
  router[method.toLowerCase() as Lowercase<typeof method>](path, handler);

  return { method, path };
}

export function createPage(path: string, handler: Handler) {
  return createRoute("GET", path, handler);
}
