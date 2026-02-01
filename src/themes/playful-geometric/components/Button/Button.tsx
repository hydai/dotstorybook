import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: [
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
    "border-2 border-[var(--color-text-primary)]",
    "shadow-[var(--shadow-md)]",
    "font-semibold",
  ].join(" "),
  secondary: [
    "bg-[var(--color-secondary)] text-[var(--color-text-inverse)]",
    "border-2 border-[var(--color-text-primary)]",
    "shadow-[var(--shadow-md)]",
    "font-semibold",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "border-2 border-[var(--color-text-primary)]",
    "shadow-[var(--shadow-sm)]",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-5 text-sm",
  md: "h-11 px-7 text-base",
  lg: "h-14 px-9 text-lg",
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
          : {
              x: -2,
              y: -2,
              boxShadow: "6px 6px 0px 0px #1E293B",
            }
      }
      whileTap={
        disabled
          ? undefined
          : {
              x: 2,
              y: 2,
              boxShadow: "2px 2px 0px 0px #1E293B",
            }
      }
      transition={transitions.bouncy}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-colors",
        "font-[var(--font-body)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
