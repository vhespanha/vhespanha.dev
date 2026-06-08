import { H1, Lead } from "@/components/typography.tsx";
import { createPage } from "@/routes/_router.ts";

export default createPage("/", (c) => {
  return c.render(
    <>
      <H1>Vinicius Hespanha</H1>
      <Lead>The quick brown fox jumps over the lazy dog.</Lead>
    </>,
  );
});
