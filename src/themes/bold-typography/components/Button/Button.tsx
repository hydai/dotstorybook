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

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "py-2 text-xs",
  md: "py-3 text-sm",
  lg: "py-4 text-base",
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
      whileTap={disabled ? undefined : { y: 1 }}
      transition={transitions.micro}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-50",
        sizeStyles[size],
        variant === "primary" && [
          "bg-transparent px-0",
          "text-[var(--color-accent)]",
          "hover:text-[var(--color-accent-hover)]",
        ],
        variant === "outline" && [
          "px-6 border border-[var(--color-text-primary)] bg-transparent",
          "text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-text-primary)] hover:text-[var(--color-text-inverse)]",
        ],
        variant === "ghost" && [
          "px-4 bg-transparent",
          "text-[var(--color-text-muted)]",
          "hover:text-[var(--color-text-primary)]",
        ],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
      {/* Animated underline for primary variant */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-0.5 w-full bg-[var(--color-accent)] transition-transform duration-300 ease-[cubic-bezier(0.25,0,0,1)] origin-left scale-x-100 group-hover:scale-x-110"
        />
      )}
      {/* Ghost underline — appears on hover */}
      {variant === "ghost" && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-[var(--color-text-primary)] transition-transform duration-300 ease-[cubic-bezier(0.25,0,0,1)] origin-left scale-x-0"
        />
      )}
    </motion.button>
  );
}
