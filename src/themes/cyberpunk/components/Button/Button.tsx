import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface ButtonProps {
  variant?: "default" | "secondary" | "outline" | "ghost" | "glitch";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
    "hover:bg-[var(--color-accent-hover)]",
    "cyber-chamfer-sm",
  ].join(" "),
  secondary: [
    "bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)]",
    "hover:bg-[var(--color-secondary-muted)] hover:text-[var(--color-secondary-hover)]",
    "cyber-chamfer-sm",
  ].join(" "),
  outline: [
    "bg-transparent border border-[var(--color-tertiary)] text-[var(--color-tertiary)]",
    "hover:bg-[var(--color-tertiary-muted)] hover:text-[var(--color-tertiary-hover)]",
    "cyber-chamfer-sm",
  ].join(" "),
  ghost: [
    "bg-transparent border border-transparent text-[var(--color-text-muted)]",
    "hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-glow)]",
  ].join(" "),
  glitch: [
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
    "hover:bg-[var(--color-accent-hover)]",
    "cyber-chamfer-sm",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

export function Button({
  variant = "default",
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
        "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all",
        "font-[var(--font-heading)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={
        variant === "glitch"
          ? { animation: "chromatic-shift 3s infinite linear" }
          : undefined
      }
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
