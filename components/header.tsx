interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  class?: string;
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const logo: NavLink = {
  label: "vhespanha.dev",
  href: "/",
};

export default function Header({ class: className }: HeaderProps) {
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
          {links.map((link) => (
            <a
              href={link.href}
              class="inline-flex items-center btn-link"
            >
              {link.label}
            </a>
          ))}
        </div>
        <select class="select w-45">
          <optgroup label="Language">
            <option>English</option>
            <option>Portuguese</option>
          </optgroup>
        </select>
      </div>
    </header>
  );
}
