import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "magenta" | "cyan" | "yellow" | "orange" | "purple";
  pulse?: boolean;
  className?: string;
}

const variantConfig: Record<
  NonNullable<BadgeProps["variant"]>,
  { styles: string; glowColor: string; borderColor: string }
> = {
  magenta: {
    styles: "text-[#FF3AF2] bg-[rgba(255,58,242,0.15)] border-[#00F5D4]",
    glowColor: "shadow-[0_0_8px_rgba(255,58,242,0.4)]",
    borderColor: "#00F5D4",
  },
  cyan: {
    styles: "text-[#00F5D4] bg-[rgba(0,245,212,0.15)] border-[#FF3AF2]",
    glowColor: "shadow-[0_0_8px_rgba(0,245,212,0.4)]",
    borderColor: "#FF3AF2",
  },
  yellow: {
    styles: "text-[#FFE600] bg-[rgba(255,230,0,0.15)] border-[#7B2FFF]",
    glowColor: "shadow-[0_0_8px_rgba(255,230,0,0.4)]",
    borderColor: "#7B2FFF",
  },
  orange: {
    styles: "text-[#FF6B35] bg-[rgba(255,107,53,0.15)] border-[#00F5D4]",
    glowColor: "shadow-[0_0_8px_rgba(255,107,53,0.4)]",
    borderColor: "#00F5D4",
  },
  purple: {
    styles: "text-[#7B2FFF] bg-[rgba(123,47,255,0.15)] border-[#FFE600]",
    glowColor: "shadow-[0_0_8px_rgba(123,47,255,0.4)]",
    borderColor: "#FFE600",
  },
};

export function Badge({
  children,
  variant = "magenta",
  pulse = false,
  className,
}: BadgeProps) {
  const config = variantConfig[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all",
        "font-[var(--font-heading)]",
        config.styles,
        config.glowColor,
        pulse && "max-pulse-glow",
        className
      )}
    >
      {children}
    </span>
  );
}
