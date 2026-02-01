import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";
import { shadows } from "../../tokens";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: [
    "bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] text-white",
    "font-semibold",
  ].join(" "),
  secondary: [
    "bg-gradient-to-br from-[#F9A8D4] to-[#DB2777] text-white",
    "font-semibold",
  ].join(" "),
  outline: [
    "bg-white/60 text-[var(--color-text-primary)]",
    "border-2 border-[var(--color-border)]",
    "hover:border-[var(--color-accent)]/30",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "hover:bg-white/50",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-14 px-7 text-base",
  lg: "h-16 px-9 text-lg",
};

const variantShadows: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: shadows.clayButton,
  secondary: shadows.clayButton,
  outline: shadows.clayCard,
  ghost: "none",
};

const variantHoverShadows: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  primary: shadows.clayHoverButton,
  secondary: shadows.clayHoverButton,
  outline: shadows.clayHoverCard,
  ghost: shadows.clayCard,
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
          : { scale: 1.04, y: -4, boxShadow: variantHoverShadows[variant] }
      }
      whileTap={
        disabled
          ? undefined
          : { scale: 0.92, boxShadow: shadows.clayPressed }
      }
      transition={transitions.bouncy}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors",
        "rounded-full",
        "font-[var(--font-body)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/20",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{ boxShadow: variantShadows[variant] }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
