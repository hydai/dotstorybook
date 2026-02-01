import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info" | "accent";
  className?: string;
}

const variantConfig: Record<
  NonNullable<BadgeProps["variant"]>,
  { styles: string; dotColor: string }
> = {
  success: {
    styles: "text-[var(--color-success)] bg-[var(--color-success)]/10 border-[var(--color-success)]/20",
    dotColor: "bg-[var(--color-success)]",
  },
  error: {
    styles: "text-[var(--color-error)] bg-[var(--color-error)]/10 border-[var(--color-error)]/20",
    dotColor: "bg-[var(--color-error)]",
  },
  warning: {
    styles: "text-[var(--color-warning)] bg-[var(--color-warning)]/10 border-[var(--color-warning)]/20",
    dotColor: "bg-[var(--color-warning)]",
  },
  info: {
    styles: "text-[var(--color-tertiary)] bg-[var(--color-tertiary)]/10 border-[var(--color-tertiary)]/20",
    dotColor: "bg-[var(--color-tertiary)]",
  },
  accent: {
    styles: "text-[var(--color-accent)] bg-[var(--color-accent-muted)] border-[var(--color-accent)]/20",
    dotColor: "bg-[var(--color-accent)]",
  },
};

export function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  const config = variantConfig[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        "font-[var(--font-body)]",
        config.styles,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            config.dotColor
          )}
          style={{ animation: "crypto-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }}
        />
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            config.dotColor
          )}
        />
      </span>
      {children}
    </span>
  );
}
