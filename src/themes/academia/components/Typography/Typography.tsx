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
    "text-6xl font-semibold leading-[1.1] font-[var(--font-heading)]",
  h1: "text-4xl font-semibold leading-[1.2] font-[var(--font-heading)]",
  h2: "text-2xl font-semibold leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-semibold leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-relaxed font-[var(--font-body)]",
  "body-sm": "text-sm leading-relaxed font-[var(--font-body)]",
  label:
    "text-sm font-semibold tracking-[0.15em] uppercase font-[var(--font-display)]",
  caption: "text-xs leading-normal italic font-[var(--font-body)]",
};

const embossedVariants = new Set<TypographyVariant>(["display", "h1"]);

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
      style={
        embossedVariants.has(variant) && !muted
          ? {
              textShadow:
                "1px 1px 0 rgba(0, 0, 0, 0.6), -1px -1px 0 rgba(232, 223, 212, 0.08)",
            }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
