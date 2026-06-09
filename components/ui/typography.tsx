import { cn } from "@/utils.ts";
import { PropsWithChildren } from "hono/jsx";

interface Props {
  class?: string;
}

export function H1({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <h1
      class={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <h2
      class={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <h3
      class={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}
    >
      {children}
    </h3>
  );
}

export function H4({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <h4
      class={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
    >
      {children}
    </h4>
  );
}

export function P({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <p class={cn("leading-7 not-first:mt-6", className)}>
      {children}
    </p>
  );
}

export function BlockQuote(
  { class: className, children }: PropsWithChildren<Props>,
) {
  return (
    <blockquote class={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function List({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <ul class={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function Code({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <code
      class={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function Lead({ class: className, children }: PropsWithChildren<Props>) {
  return (
    <p class={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function Large(
  { class: className, children }: PropsWithChildren<Props>,
) {
  return (
    <div class={cn("text-lg font-semibold", className)}>
      {children}
    </div>
  );
}

export function Small(
  { class: className, children }: PropsWithChildren<Props>,
) {
  return (
    <small class={cn("text-sm leading-none font-medium", className)}>
      {children}
    </small>
  );
}

export function Muted(
  { class: className, children }: PropsWithChildren<Props>,
) {
  return (
    <p class={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}
