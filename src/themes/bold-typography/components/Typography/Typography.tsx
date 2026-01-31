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
  serif?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.06em] leading-[1.1]",
  h1: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.1]",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.04em] leading-[1.1]",
  h3: "text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight",
  body: "text-lg md:text-xl leading-relaxed",
  "body-sm": "text-base leading-relaxed",
  label:
    "text-xs font-mono tracking-[0.1em] uppercase",
  caption: "text-xs tracking-[0.05em]",
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
  serif = false,
}: TypographyProps) {
  const Tag = variantTags[variant];
  return (
    <Tag
      className={cn(
        variantStyles[variant],
        muted
          ? "text-[var(--color-text-secondary)]"
          : "text-[var(--color-text-primary)]",
        serif && "font-[var(--font-display)] italic",
        className
      )}
    >
      {children}
    </Tag>
  );
}
