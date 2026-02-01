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
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)] font-semibold",
    "hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
  ].join(" "),
  secondary: [
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)]",
    "hover:bg-white/5 hover:border-[var(--color-border-hover)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-secondary)] border border-transparent",
    "hover:bg-white/5 hover:text-[var(--color-text-primary)]",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-6 text-base",
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
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={transitions.fast}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all",
        "rounded-[var(--radius-md)]",
        "font-[var(--font-sans)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
