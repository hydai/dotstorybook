import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface NeumorphicWellProps {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
}

const sizeStyles: Record<NonNullable<NeumorphicWellProps["size"]>, string> = {
  sm: "w-16 h-16 text-lg",
  md: "w-24 h-24 text-2xl",
  lg: "w-32 h-32 text-3xl",
};

export function NeumorphicWell({
  size = "md",
  children,
  className,
}: NeumorphicWellProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] bg-[#E0E5EC] flex items-center justify-center",
        "text-[var(--color-text-secondary)] font-bold font-[var(--font-heading)]",
        sizeStyles[size],
        className
      )}
      style={{ boxShadow: shadows.insetDeep }}
    >
      {children}
    </div>
  );
}
