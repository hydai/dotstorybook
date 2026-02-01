import React from "react";
import { cn } from "@/shared/utils/cn";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-lg"
  | "label"
  | "caption";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const variantTags: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-lg": "p",
  label: "span",
  caption: "span",
};

const variantStyles: Record<TypographyVariant, string> = {
  display: [
    "font-[var(--font-heading)] text-7xl font-extrabold leading-tight",
    "text-[var(--color-text-primary)]",
  ].join(" "),
  h1: [
    "font-[var(--font-heading)] text-4xl font-bold leading-tight",
    "text-[var(--color-text-primary)]",
  ].join(" "),
  h2: [
    "font-[var(--font-heading)] text-2xl font-bold leading-tight",
    "text-[var(--color-text-primary)]",
  ].join(" "),
  h3: [
    "font-[var(--font-heading)] text-xl font-bold leading-snug",
    "text-[var(--color-text-primary)]",
  ].join(" "),
  body: [
    "font-[var(--font-body)] text-base font-medium leading-relaxed",
    "text-[var(--color-text-secondary)]",
  ].join(" "),
  "body-lg": [
    "font-[var(--font-body)] text-lg font-medium leading-relaxed",
    "text-[var(--color-text-secondary)]",
  ].join(" "),
  label: [
    "font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide",
    "text-[var(--color-text-primary)]",
  ].join(" "),
  caption: [
    "font-[var(--font-body)] text-xs font-medium",
    "text-[var(--color-text-muted)]",
  ].join(" "),
};

export function Typography({
  variant = "body",
  children,
  className,
}: TypographyProps) {
  const Tag = variantTags[variant];

  return (
    <Tag className={cn(variantStyles[variant], className)}>
      {children}
    </Tag>
  );
}
