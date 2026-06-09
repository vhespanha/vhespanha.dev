import { cn, slugify } from "@/utils.ts";
import { ChevronDownIcon } from "@/components/ui/icon.tsx";

interface SelectProps {
  name: string;
  options: string[];
  selected?: string;
  placeholder?: string;
  class?: string;
}

export default function Select(
  {
    name,
    options,
    selected,
    placeholder = "Select an option...",
    class: className,
  }: SelectProps,
) {
  const id = slugify(name);

  const cur = options.find((o) => o === selected);
  const label = cur ?? placeholder;

  return (
    <div id={id} class="select">
      <button
        id={`${id}-trigger`}
        type="button"
        class={cn("btn-outline w-45", className)}
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={`${id}-listbox`}
      >
        <span class="truncate">{label}</span>
        <ChevronDownIcon />
      </button>

      <div id={`${id}-popover`} data-popover aria-hidden="true">
        <div
          role="listbox"
          id={`${id}-listbox`}
          aria-orientation="vertical"
          aria-labelledby={`${id}-trigger`}
        >
          <span role="heading">{name}</span>
          {options.map((option, i) => (
            <div
              id={`${id}-option-${i}`}
              role="option"
              data-value={slugify(option)}
              aria-selected={slugify(option) === selected ? "true" : undefined}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <input type="hidden" name={name} value={selected ?? ""} />
    </div>
  );
}
