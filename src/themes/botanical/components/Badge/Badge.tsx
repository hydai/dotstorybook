import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sage" | "terracotta" | "outline" | "clay";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  sage: "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
  terracotta: "bg-[var(--color-secondary)] text-[var(--color-text-inverse)]",
  outline:
    "bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)]",
  clay: "bg-[var(--color-surface-3)] text-[var(--color-text-primary)]",
};

export function Badge({
  children,
  variant = "sage",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-xs font-medium uppercase tracking-widest rounded-full transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
