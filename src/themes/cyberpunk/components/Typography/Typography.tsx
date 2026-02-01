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
    "text-6xl font-black uppercase tracking-widest leading-[1.1] font-[var(--font-heading)]",
  h1: "text-4xl font-bold uppercase tracking-widest leading-[1.2] font-[var(--font-heading)]",
  h2: "text-2xl font-bold uppercase tracking-wider leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-bold uppercase tracking-wide leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-relaxed font-[var(--font-mono)]",
  "body-sm": "text-sm leading-relaxed font-[var(--font-mono)]",
  label:
    "text-sm font-bold tracking-widest uppercase font-[var(--font-label)]",
  caption: "text-xs leading-normal font-[var(--font-mono)]",
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
                "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
            }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
