import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brass" | "crimson" | "outline" | "seal";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  brass:
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)] font-[var(--font-display)]",
  crimson:
    "bg-[var(--color-secondary)] text-[var(--color-text-primary)] font-[var(--font-display)]",
  outline:
    "bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-[var(--font-display)]",
  seal: "academia-wax-seal w-10 h-10 text-[10px] font-[var(--font-display)]",
};

export function Badge({
  children,
  variant = "brass",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider transition-colors",
        variant !== "seal" && "px-3 py-1",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
