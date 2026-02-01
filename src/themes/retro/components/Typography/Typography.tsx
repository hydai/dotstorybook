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
  rainbow?: boolean;
  shadow3d?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-4xl md:text-6xl font-extrabold uppercase tracking-wider leading-[1.1] font-[var(--font-heading)]",
  h1: "text-3xl md:text-5xl font-bold uppercase tracking-wide leading-[1.2] font-[var(--font-heading)]",
  h2: "text-2xl md:text-3xl font-bold uppercase tracking-wide leading-[1.3] font-[var(--font-heading)]",
  h3: "text-xl font-bold uppercase tracking-wide leading-[1.4] font-[var(--font-heading)]",
  body: "text-base leading-relaxed font-[var(--font-body)]",
  "body-lg": "text-lg leading-relaxed font-[var(--font-body)]",
  label:
    "text-xs font-bold uppercase tracking-widest font-[var(--font-body)]",
  mono: "text-sm font-[var(--font-mono)]",
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
  "body-lg": "p",
  label: "span",
  mono: "code",
};

export function Typography({
  variant = "body",
  children,
  className,
  rainbow = false,
  shadow3d = false,
}: TypographyProps) {
  const Tag = variantTags[variant];

  return (
    <Tag
      className={cn(
        variantStyles[variant],
        "text-[var(--color-text-primary)]",
        className
      )}
      style={{
        animation: rainbow ? "retro-rainbow 4s linear infinite" : undefined,
        textShadow: shadow3d ? "2px 2px 0 #808080" : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
