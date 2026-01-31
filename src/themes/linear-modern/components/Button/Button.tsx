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
    "bg-[var(--color-accent)] text-white",
    "shadow-[var(--shadow-glow)]",
    "hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow-lg)]",
    "active:shadow-[var(--shadow-glow)]",
  ].join(" "),
  secondary: [
    "bg-[var(--color-surface-2)]/60 text-[var(--color-text-primary)]",
    "border border-[var(--color-border)]",
    "backdrop-blur-sm",
    "hover:bg-[var(--color-surface-2)] hover:border-[var(--color-border-hover)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-secondary)]",
    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]/50",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs rounded-[var(--radius-sm)]",
  md: "h-9 px-4 text-sm rounded-[var(--radius-md)]",
  lg: "h-11 px-6 text-base rounded-[var(--radius-md)]",
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
        "inline-flex items-center justify-center gap-2 font-medium transition-all",
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
