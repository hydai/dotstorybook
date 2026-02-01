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
    "bg-gradient-to-r from-indigo-600 to-violet-600 text-white",
    "rounded-full font-semibold",
    "hover:from-indigo-500 hover:to-violet-500",
  ].join(" "),
  secondary: [
    "bg-white border border-slate-200 text-slate-700",
    "rounded-full font-semibold",
    "hover:bg-slate-50",
  ].join(" "),
  ghost: [
    "bg-transparent text-slate-600 border-0",
    "rounded-full font-medium",
    "hover:bg-slate-50",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
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
      transition={transitions.smooth}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{
        boxShadow: variant === "primary" ? shadows.button : undefined,
      }}
      disabled={disabled}
      onClick={onClick}
      type={type}
      onMouseEnter={(e) => {
        if (variant === "primary" && !disabled) {
          e.currentTarget.style.boxShadow = shadows.hoverButton;
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary" && !disabled) {
          e.currentTarget.style.boxShadow = shadows.button;
        }
      }}
    >
      {children}
    </motion.button>
  );
}
