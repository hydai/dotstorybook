import React from "react";
import { cn } from "@/shared/utils/cn";

interface AmberTextProps {
  children: React.ReactNode;
  variant?: "gradient" | "glow" | "solid";
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}

const variantStyles: Record<NonNullable<AmberTextProps["variant"]>, string> = {
  gradient:
    "bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-hover)] to-[#f97316] bg-clip-text text-transparent",
  glow: "text-[var(--color-accent)]",
  solid: "text-[var(--color-accent)]",
};

export function AmberText({
  children,
  variant = "gradient",
  as: Tag = "span",
  className,
}: AmberTextProps) {
  return (
    <Tag
      className={cn(variantStyles[variant], className)}
      style={
        variant === "glow"
          ? {
              textShadow:
                "0 0 10px rgba(245, 158, 11, 0.5), 0 0 30px rgba(245, 158, 11, 0.3), 0 0 60px rgba(245, 158, 11, 0.1)",
            }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
