import { PropsWithChildren } from "hono/jsx";
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import Header from "@/components/header.tsx";
import { PageContext, PagePath } from "@/hooks/use-page.ts";
import { routePath } from "hono/route";

function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vinicius Hespanha | Portfolio</title>
        <link href="main.css" rel="stylesheet" />
        <script type="module" src="client.ts" />
      </head>
      <body class="relative bg-sidebar font-sans text-foreground antialiased">
        <div class="isolate flex min-h-svh flex-col overflow-clip">
          <Header />
          <div class="mx-auto relative flex-1 max-w-5xl gap-10 p-4 md:p-6 xl:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

function Document({ children }: PropsWithChildren) {
  const c = useRequestContext();
  const path = routePath(c) as PagePath;

  return (
    <PageContext.Provider value={path}>
      <Layout>{children}</Layout>
    </PageContext.Provider>
  );
}

export default jsxRenderer(Document, { docType: "<!DOCTYPE html>" });
