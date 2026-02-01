import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

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
    "bg-gradient-to-r from-[#FF3AF2] to-[#7B2FFF] text-white",
    "border-4 border-[#FFE600]",
    "shadow-[4px_4px_0_#FF3AF2,8px_8px_0_#00F5D4,12px_12px_0_#FFE600]",
    "font-bold uppercase tracking-wider",
  ].join(" "),
  secondary: [
    "bg-transparent text-[#00F5D4]",
    "border-4 border-dashed border-[#00F5D4]",
    "shadow-[4px_4px_0_#00F5D4,8px_8px_0_#FF3AF2]",
    "font-bold uppercase tracking-wider",
  ].join(" "),
  outline: [
    "bg-transparent text-[#FF3AF2]",
    "border-4 border-[#FF3AF2]",
    "shadow-[4px_4px_0_#FF3AF2,8px_8px_0_#00F5D4,12px_12px_0_#FFE600]",
    "font-bold uppercase tracking-wider",
  ].join(" "),
  ghost: [
    "bg-transparent text-[#FF3AF2]",
    "border-4 border-transparent",
    "font-bold uppercase tracking-wider",
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
      whileHover={
        disabled
          ? undefined
          : {
              scale: 1.06,
              rotate: -1.5,
              boxShadow:
                "6px 6px 0 #FF3AF2, 12px 12px 0 #00F5D4, 18px 18px 0 #FFE600",
            }
      }
      whileTap={
        disabled
          ? undefined
          : { scale: 0.95, boxShadow: "2px 2px 0 #FF3AF2" }
      }
      transition={transitions.bouncy}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-all",
        "font-[var(--font-heading)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
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
