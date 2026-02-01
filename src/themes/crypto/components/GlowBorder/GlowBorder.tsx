import React from "react";
import { cn } from "@/shared/utils/cn";

interface GlowBorderProps {
  children: React.ReactNode;
  color?: "orange" | "gold" | "gradient";
  animated?: boolean;
  className?: string;
}

const colorStyles: Record<NonNullable<GlowBorderProps["color"]>, string> = {
  orange:
    "shadow-[0_0_8px_rgba(247,147,26,0.3),0_0_16px_rgba(247,147,26,0.15)] border-[var(--color-accent)]/40",
  gold:
    "shadow-[0_0_8px_rgba(255,214,0,0.3),0_0_16px_rgba(255,214,0,0.15)] border-[var(--color-tertiary)]/40",
  gradient:
    "shadow-[0_0_8px_rgba(247,147,26,0.3),0_0_16px_rgba(234,88,12,0.15)] border-[var(--color-accent)]/40",
};

export function GlowBorder({
  children,
  color = "orange",
  animated = false,
  className,
}: GlowBorderProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-px",
        colorStyles[color],
        className
      )}
      style={
        animated
          ? { animation: "crypto-border-glow 3s ease-in-out infinite" }
          : undefined
      }
    >
      <div className="rounded-[calc(1rem-1px)] bg-[var(--color-surface-1)] p-6">
        {children}
      </div>
    </div>
  );
}
