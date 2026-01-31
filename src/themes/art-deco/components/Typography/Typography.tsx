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
    "text-6xl font-normal uppercase tracking-[0.3em] leading-[1.1] font-[var(--font-heading)]",
  h1: "text-4xl font-normal uppercase tracking-[0.25em] leading-[1.2] font-[var(--font-heading)]",
  h2: "text-2xl font-normal uppercase tracking-[0.2em] leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-normal uppercase tracking-[0.15em] leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  label: "text-sm font-semibold tracking-[0.2em] uppercase",
  caption: "text-xs leading-normal",
};

const glowVariants = new Set<TypographyVariant>([
  "display",
  "h1",
  "h2",
  "h3",
  "label",
]);

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
        glowVariants.has(variant) && !muted
          ? {
              textShadow:
                "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
            }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
