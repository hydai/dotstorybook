import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info" | "accent";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  error: "bg-red-50 text-red-700 border-red-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const dotColors: Record<NonNullable<BadgeProps["variant"]>, string> = {
  success: "bg-emerald-500",
  error: "bg-red-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
  accent: "bg-indigo-500",
};

export function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border transition-colors",
        variant === "accent" && "animate-[corporate-glow-pulse_3s_ease-in-out_infinite]",
        variantStyles[variant],
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        {variant === "accent" && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75 animate-[corporate-ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]",
              dotColors[variant]
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex h-1.5 w-1.5 rounded-full",
            dotColors[variant]
          )}
        />
      </span>
      {children}
    </span>
  );
}
