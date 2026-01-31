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
    "text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85]",
  h1: "text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-none",
  h3: "text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none",
  body: "text-lg md:text-xl leading-tight",
  "body-sm": "text-base leading-tight",
  label: "text-xs md:text-sm font-bold tracking-widest uppercase",
  caption: "text-xs leading-normal tracking-wide",
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
