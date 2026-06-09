import { createContext, useContext } from "hono/jsx";

export const pages = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/contact": "Contact",
  "/blog": "Blog",
} as const;

export type PagePath = keyof typeof pages;
export type PageLabel = typeof pages[PagePath];

export const PageContext = createContext<PagePath>("/");

export default function usePage() {
  return useContext(PageContext);
}
