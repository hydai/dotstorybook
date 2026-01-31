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
  display: "text-6xl font-bold tracking-tight leading-[1.1]",
  h1: "text-4xl font-bold tracking-tight leading-[1.2]",
  h2: "text-2xl font-semibold tracking-tight leading-[1.3]",
  h3: "text-xl font-semibold leading-[1.4]",
  body: "text-base leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  label: "text-sm font-medium tracking-wide uppercase",
  caption: "text-xs leading-normal",
};

const variantTags: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
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
