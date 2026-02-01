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
    "font-[var(--font-mono)] uppercase tracking-[0.12em] font-medium",
    "hover:bg-[var(--color-accent-hover)]",
  ].join(" "),
  secondary: [
    "bg-transparent border border-[var(--color-text-primary)] text-[var(--color-text-primary)]",
    "font-[var(--font-mono)] uppercase tracking-[0.12em] font-medium",
    "hover:bg-[var(--color-text-primary)] hover:text-[var(--color-text-inverse)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)] border-0",
    "font-[var(--font-mono)] uppercase tracking-[0.12em] font-medium",
    "hover:underline hover:underline-offset-4",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-5 text-[10px]",
  md: "h-11 px-7 text-xs",
  lg: "h-13 px-9 text-sm",
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
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { y: 0 }}
      transition={transitions.fast}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all",
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
