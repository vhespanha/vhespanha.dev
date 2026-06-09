import usePage, { pages } from "@/hooks/use-page.ts";
import Select from "@/components/ui/select.tsx";

interface HeaderProps {
  class?: string;
}

const logo = {
  label: "vhespanha.dev",
  href: "/",
};

export default function Header({ class: className }: HeaderProps) {
  const currentPage = usePage();

  return (
    <header class={className}>
      <div
        hx-boost="true"
        class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href={logo.href}
          class="text-xl font-semibold tracking-tight btn-link"
        >
          {logo.label}
        </a>
        <div class="hidden items-center gap-1 lg:flex">
          {Object.entries(pages).map(([path, label]) => (
            <a
              href={path}
              class={`${
                currentPage === path ? "font-semibold" : "text-muted-foreground"
              } inline-flex items-center btn-link`}
            >
              {label}
            </a>
          ))}
        </div>
        <Select
          name="Language"
          options={["English", "Portuguese"]}
        />
      </div>
    </header>
  );
}
