import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
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
    "hover:brightness-110",
  ].join(" "),
  outline: [
    "border-2 border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)]",
    "hover:bg-[var(--color-text-primary)] hover:text-[var(--color-text-inverse)] hover:border-[var(--color-text-primary)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "hover:text-[var(--color-accent)]",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-14 px-8 text-sm",
  lg: "h-20 px-12 text-lg",
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
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      transition={transitions.fast}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-tighter transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-50",
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
