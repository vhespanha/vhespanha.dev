import {
  ChevronDown,
  type LucideIconData,
  type LucideIconNode,
} from "@lucide/icons";
import { buildLucideIconNode } from "@lucide/icons/build";
import type { FC, JSX } from "hono/jsx";
import { memo } from "hono/jsx";

interface IconProps {
  data: LucideIconData;
  class?: string;
}

interface IconNodeProps {
  node: LucideIconNode;
  class?: string;
}

function IconNode({ node, class: className }: IconNodeProps) {
  const [tag, attrs, children] = node;
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag class={className} {...attrs}>
      {children?.map((child, i) => <IconNode key={i} node={child} />)}
    </Tag>
  );
}

// TODO: Make `class` attribute influece icon color.
export default function Icon({ data, class: className }: IconProps) {
  return <IconNode class={className} node={buildLucideIconNode(data)} />;
}

export const ChevronDownIcon: FC<{ class?: string }> = memo((
  { class: className }: { class?: string },
) => <Icon data={ChevronDown} class={className} />);
