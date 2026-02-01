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
  | "mono";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  gradient?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] font-[var(--font-heading)]",
  h1: "text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] font-[var(--font-heading)]",
  h2: "text-2xl md:text-3xl font-semibold tracking-tight leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-semibold tracking-tight leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-relaxed font-[var(--font-body)]",
  "body-lg": "text-lg leading-relaxed font-[var(--font-body)]",
  label:
    "text-xs font-medium uppercase tracking-wider font-[var(--font-mono)]",
  mono: "text-sm font-[var(--font-mono)]",
};

const variantTags: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-lg": "p",
  label: "span",
  mono: "span",
};

const gradientClass =
  "bg-gradient-to-r from-[#EA580C] via-[#F7931A] to-[#FFD600] bg-clip-text text-transparent";

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
          ? gradientClass
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
