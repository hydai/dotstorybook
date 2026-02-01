import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

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
    "bg-[#ff4757] text-white",
    "uppercase tracking-[0.15em] font-[var(--font-mono)] font-medium",
  ].join(" "),
  secondary: [
    "bg-[var(--color-surface-0)] text-[var(--color-text-primary)]",
    "uppercase tracking-[0.15em] font-[var(--font-mono)] font-medium",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "uppercase tracking-[0.15em] font-[var(--font-mono)] font-medium",
    "hover:bg-[var(--color-surface-2)]/50",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-5 text-xs",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
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
              y: -1,
              boxShadow: variant === "ghost" ? shadows.card : shadows.hoverButton,
            }
      }
      whileTap={
        disabled
          ? undefined
          : { y: 2, boxShadow: shadows.pressed }
      }
      transition={transitions.mechanical}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors",
        "rounded-[var(--radius-md)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/20",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{
        boxShadow: variant === "ghost" ? "none" : shadows.button,
      }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
