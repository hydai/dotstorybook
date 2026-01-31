import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning";
  className?: string;
}

const variantConfig: Record<
  NonNullable<BadgeProps["variant"]>,
  { prefix: string; styles: string; glow: string }
> = {
  success: {
    prefix: "OK",
    styles: "text-[var(--color-success)] border-[var(--color-success)]",
    glow: "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
  },
  error: {
    prefix: "ERR",
    styles: "text-[var(--color-error)] border-[var(--color-error)]",
    glow: "0 0 10px rgba(255, 51, 51, 0.4), 0 0 20px rgba(255, 51, 51, 0.2)",
  },
  warning: {
    prefix: "WARN",
    styles: "text-[var(--color-warning)] border-[var(--color-warning)]",
    glow: "0 0 10px rgba(255, 176, 0, 0.4), 0 0 20px rgba(255, 176, 0, 0.2)",
  },
};

export function Badge({
  children,
  variant = "success",
  className,
}: BadgeProps) {
  const config = variantConfig[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors",
        config.styles,
        className
      )}
      style={{ textShadow: config.glow }}
    >
      [{config.prefix}] {children}
    </span>
  );
}
