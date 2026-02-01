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
  | "accent";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  gradient?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-6xl md:text-8xl font-black uppercase leading-[1.05] font-[var(--font-heading)] max-text-shadow",
  h1: "text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1] font-[var(--font-heading)] max-text-shadow-sm",
  h2: "text-2xl md:text-3xl font-bold uppercase tracking-tight leading-[1.2] font-[var(--font-heading)] max-text-shadow-sm",
  h3: "text-xl md:text-2xl font-bold leading-[1.3] font-[var(--font-heading)]",
  body: "text-base leading-relaxed font-[var(--font-body)]",
  "body-lg": "text-lg leading-relaxed font-[var(--font-body)]",
  label:
    "text-sm font-bold uppercase tracking-widest font-[var(--font-heading)]",
  accent: "text-3xl md:text-4xl font-[var(--font-display)] text-[#FF3AF2]",
};

const variantTags: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-lg": "p",
  label: "span",
  accent: "span",
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
          ? "max-gradient-text"
          : muted
            ? "text-[var(--color-text-muted)]"
            : "text-[var(--color-text-primary)]",
        gradient && "[text-shadow:none]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
