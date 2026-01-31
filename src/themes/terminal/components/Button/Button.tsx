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
    "border border-[var(--color-accent)] text-[var(--color-accent)]",
    "hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)]",
    "active:bg-[var(--color-accent-hover)]",
  ].join(" "),
  secondary: [
    "border border-dashed border-[var(--color-warning)] text-[var(--color-warning)]",
    "hover:bg-[var(--color-warning)] hover:text-[var(--color-text-inverse)]",
  ].join(" "),
  ghost: [
    "border border-transparent text-[var(--color-text-muted)]",
    "hover:text-[var(--color-text-primary)] hover:shadow-[var(--shadow-glow)]",
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
      whileHover={disabled ? undefined : { scale: 1.01 }}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      transition={transitions.fast}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        "bg-transparent",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {"[ "}
      {children}
      {" ]"}
    </motion.button>
  );
}
