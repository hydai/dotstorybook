import React from "react";
import { cn } from "@/shared/utils/cn";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-sm"
  | "label"
  | "caption";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-6xl font-bold leading-[1.1] tracking-[-0.02em] font-[var(--font-heading)]",
  h1: "text-4xl font-bold leading-[1.2] tracking-[-0.01em] font-[var(--font-heading)]",
  h2: "text-2xl font-bold leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-bold leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-[1.75] font-[var(--font-body)]",
  "body-sm": "text-sm leading-[1.75] font-[var(--font-body)]",
  label:
    "text-[10px] font-medium tracking-[0.15em] uppercase font-[var(--font-mono)]",
  caption: "text-xs leading-normal font-[var(--font-body)]",
};

const variantTags: Record<
  TypographyVariant,
  keyof React.JSX.IntrinsicElements
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-sm": "p",
  label: "span",
  caption: "span",
};

export function Typography({
  variant = "body",
  children,
  className,
  muted = false,
}: TypographyProps) {
  const Tag = variantTags[variant];
  return (
    <Tag
      className={cn(
        variantStyles[variant],
        muted
          ? "text-[var(--color-text-muted)]"
          : "text-[var(--color-text-primary)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
