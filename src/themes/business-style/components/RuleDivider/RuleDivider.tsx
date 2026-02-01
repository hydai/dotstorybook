import React from "react";
import { cn } from "@/shared/utils/cn";

interface RuleDividerProps {
  variant?: "default" | "gold";
  spacing?: "sm" | "md" | "lg";
  className?: string;
}

const spacingStyles: Record<NonNullable<RuleDividerProps["spacing"]>, string> = {
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
};

export function RuleDivider({
  variant = "default",
  spacing = "md",
  className,
}: RuleDividerProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px w-full",
        variant === "default"
          ? "bg-[var(--color-border)]"
          : "bg-[var(--color-accent)]",
        spacingStyles[spacing],
        className
      )}
    />
  );
}
