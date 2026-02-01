import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: ["bg-[#6C63FF] text-white", "font-semibold"].join(" "),
  secondary: ["bg-[#38B2AC] text-white", "font-semibold"].join(" "),
  outline: [
    "bg-[#E0E5EC] text-[var(--color-text-primary)]",
    "font-semibold",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "font-semibold",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-14 px-7 text-base",
  lg: "h-16 px-9 text-lg",
};

const variantShadows: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: shadows.extruded,
  secondary: shadows.extruded,
  outline: shadows.extruded,
  ghost: "none",
};

const variantHoverShadows: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  primary: shadows.extrudedHover,
  secondary: shadows.extrudedHover,
  outline: shadows.extrudedHover,
  ghost: shadows.extrudedSmall,
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  disabled,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={
        disabled
          ? undefined
          : { y: -1, boxShadow: variantHoverShadows[variant] }
      }
      whileTap={
        disabled
          ? undefined
          : { y: 0.5, boxShadow: shadows.insetSmall }
      }
      transition={transitions.smooth}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors",
        "rounded-2xl",
        "font-[var(--font-body)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/20",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{ boxShadow: variantShadows[variant] }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
