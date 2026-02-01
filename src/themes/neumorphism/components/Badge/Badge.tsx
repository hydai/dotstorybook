import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "success" | "error" | "warning" | "info";
  className?: string;
}

const variantConfig: Record<
  NonNullable<BadgeProps["variant"]>,
  { styles: string; dotColor: string }
> = {
  accent: {
    styles: "text-[var(--color-accent)] bg-[rgba(108,99,255,0.15)]",
    dotColor: "bg-[var(--color-accent)]",
  },
  success: {
    styles: "text-[var(--color-success)] bg-[rgba(72,187,120,0.15)]",
    dotColor: "bg-[var(--color-success)]",
  },
  error: {
    styles: "text-[var(--color-error)] bg-[rgba(245,101,101,0.15)]",
    dotColor: "bg-[var(--color-error)]",
  },
  warning: {
    styles: "text-[var(--color-warning)] bg-[rgba(236,201,75,0.15)]",
    dotColor: "bg-[var(--color-warning)]",
  },
  info: {
    styles: "text-[var(--color-secondary)] bg-[rgba(56,178,172,0.15)]",
    dotColor: "bg-[var(--color-secondary)]",
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
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
        "font-[var(--font-body)]",
        config.styles,
        className
      )}
      style={{ boxShadow: shadows.extrudedSmall }}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            config.dotColor
          )}
          style={{
            animation: "neu-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
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
