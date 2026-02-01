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
    "bg-gradient-to-b from-[#D4B872] to-[#B8953F] text-[var(--color-text-inverse)]",
    "font-[var(--font-display)] uppercase tracking-[0.15em]",
    "hover:from-[#DCC37E] hover:to-[#C9A962]",
  ].join(" "),
  secondary: [
    "bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)]",
    "font-[var(--font-display)] uppercase tracking-[0.15em]",
    "hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-text-primary)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-accent)] border-0",
    "font-[var(--font-display)] uppercase tracking-[0.15em]",
    "hover:underline hover:underline-offset-4",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-6 text-xs",
  md: "h-12 px-8 text-sm",
  lg: "h-14 px-10 text-base",
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
      whileHover={disabled ? undefined : { y: -4 }}
      whileTap={disabled ? undefined : { y: 0 }}
      transition={transitions.fast}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        variant === "primary" && "academia-engraved",
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
