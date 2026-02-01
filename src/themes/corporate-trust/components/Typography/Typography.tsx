import React from "react";
import { cn } from "@/shared/utils/cn";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-sm"
  | "label";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  gradient?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-6xl font-extrabold leading-[1.1] tracking-tight font-[var(--font-heading)]",
  h1: "text-4xl font-bold leading-[1.2] tracking-tight font-[var(--font-heading)]",
  h2: "text-2xl font-bold leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-semibold leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-relaxed font-[var(--font-body)]",
  "body-sm": "text-sm leading-relaxed font-[var(--font-body)]",
  label: "text-xs font-semibold uppercase tracking-wider font-[var(--font-body)]",
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
};

export function Typography({
  variant = "body",
  children,
  className,
  muted = false,
  gradient = false,
}: TypographyProps) {
  const Tag = variantTags[variant];
  return (
    <Tag
      className={cn(
        variantStyles[variant],
        gradient
          ? "bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
          : muted
            ? "text-[var(--color-text-muted)]"
            : "text-[var(--color-text-primary)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
