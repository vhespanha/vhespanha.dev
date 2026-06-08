import { PropsWithChildren } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";

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
        <div class="relative isolate flex min-h-svh flex-col overflow-clip">
          <div class="mx-auto relative flex-1 max-w-5xl gap-10 p-4 md:p-6 xl:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

export default jsxRenderer(Layout, { docType: "<!DOCTYPE html>" });
