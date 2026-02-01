import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info" | "accent";
  className?: string;
}

const variantConfig: Record<
  NonNullable<BadgeProps["variant"]>,
  { styles: string; dotColor: string; ledGlow: string }
> = {
  success: {
    styles: "text-[#2ed573]",
    dotColor: "bg-[#2ed573]",
    ledGlow: shadows.ledGlow.green,
  },
  error: {
    styles: "text-[#ff4757]",
    dotColor: "bg-[#ff4757]",
    ledGlow: shadows.ledGlow.red,
  },
  warning: {
    styles: "text-[#ffa502]",
    dotColor: "bg-[#ffa502]",
    ledGlow: shadows.ledGlow.amber,
  },
  info: {
    styles: "text-[#70a1ff]",
    dotColor: "bg-[#70a1ff]",
    ledGlow: shadows.ledGlow.blue,
  },
  accent: {
    styles: "text-[#ff4757]",
    dotColor: "bg-[#ff4757]",
    ledGlow: shadows.ledGlow.red,
  },
};

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  const config = variantConfig[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-medium transition-colors",
        "font-[var(--font-mono)] uppercase tracking-[0.15em]",
        "bg-[var(--color-surface-0)]",
        config.styles,
        className
      )}
      style={{
        boxShadow: shadows.button,
      }}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            config.dotColor
          )}
          style={{
            animation:
              "industrial-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        />
        <span
          className={cn(
            "relative inline-flex h-1.5 w-1.5 rounded-full",
            config.dotColor
          )}
          style={{
            boxShadow: config.ledGlow,
            animation:
              "industrial-led-pulse 2s ease-in-out infinite",
          }}
        />
      </span>
      {children}
    </span>
  );
}
