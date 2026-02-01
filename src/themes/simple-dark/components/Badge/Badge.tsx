import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] border-transparent",
  accent:
    "bg-[var(--color-accent-muted)] text-[var(--color-accent)] border-transparent",
  outline:
    "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)]",
};

export function Badge({
  children,
  variant = "default",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border rounded-[var(--radius-full)] px-2.5 py-0.5 text-xs font-medium transition-colors",
        "font-[var(--font-sans)]",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-current shrink-0"
          style={{ animation: "sd-pulse-glow 2s ease-in-out infinite" }}
        />
      )}
      {children}
    </span>
  );
}
