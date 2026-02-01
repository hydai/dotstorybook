import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "secondary" | "tertiary" | "quaternary" | "outline";
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, { badge: string; dotColor: string }> = {
  accent: {
    badge: "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
    dotColor: "bg-[var(--color-surface-1)]",
  },
  secondary: {
    badge: "bg-[var(--color-secondary)] text-[var(--color-text-inverse)]",
    dotColor: "bg-[var(--color-surface-1)]",
  },
  tertiary: {
    badge: "bg-[var(--color-tertiary)] text-[var(--color-text-primary)]",
    dotColor: "bg-[var(--color-text-primary)]",
  },
  quaternary: {
    badge: "bg-[var(--color-quaternary)] text-[var(--color-text-primary)]",
    dotColor: "bg-[var(--color-text-primary)]",
  },
  outline: {
    badge: "bg-transparent text-[var(--color-text-primary)]",
    dotColor: "bg-[var(--color-accent)]",
  },
};

export function Badge({
  children,
  variant = "accent",
  dot = false,
  className,
}: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
        "border-2 border-[var(--color-text-primary)]",
        "shadow-[var(--shadow-sm)]",
        "font-[var(--font-body)] text-xs font-semibold",
        styles.badge,
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75",
              styles.dotColor,
            )}
            style={{
              animation: "pg-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
          />
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              styles.dotColor,
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
