import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: [
    "bg-gradient-to-r from-[#EA580C] to-[#F7931A] text-white",
    "hover:shadow-[var(--shadow-glow)]",
    "font-semibold",
  ].join(" "),
  outline: [
    "bg-transparent border-2 border-white/20 text-[var(--color-text-primary)]",
    "hover:bg-white/10 hover:border-white/30",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "hover:bg-white/10 hover:text-[var(--color-accent)]",
  ].join(" "),
  link: [
    "bg-transparent text-[var(--color-accent)] p-0 h-auto",
    "hover:underline",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
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
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={transitions.fast}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-all",
        "font-[var(--font-body)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        variant !== "link" && sizeStyles[size],
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
