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
    "bg-[var(--color-surface-1)] text-[var(--color-text-primary)]",
    "border-[3px] border-[var(--color-border)]",
    "shadow-[var(--shadow-md)]",
    "font-bold",
  ].join(" "),
  secondary: [
    "bg-[var(--color-surface-3)] text-[var(--color-text-primary)]",
    "border-[3px] border-[var(--color-border)]",
    "shadow-[var(--shadow-sm)]",
    "font-bold",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "border-[2px] border-dashed border-[var(--color-border-dashed)]",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-5 text-sm",
  md: "h-11 px-7 text-base",
  lg: "h-14 px-9 text-lg",
};

const wobblyRadius = {
  sm: "42% 58% 55% 45% / 55% 42% 58% 45%",
  md: "45% 55% 52% 48% / 52% 45% 55% 48%",
  lg: "48% 52% 50% 50% / 50% 48% 52% 50%",
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
          : variant === "primary"
            ? {
                x: -2,
                y: -2,
                boxShadow: "6px 6px 0px 0px #2d2d2d",
                backgroundColor: "#ff4d4d",
                color: "#fdfbf7",
              }
            : variant === "secondary"
              ? {
                  x: -1,
                  y: -1,
                  boxShadow: "4px 4px 0px 0px #2d2d2d",
                  backgroundColor: "#2d5da1",
                  color: "#fdfbf7",
                }
              : {
                  x: -1,
                  y: -1,
                }
      }
      whileTap={
        disabled
          ? undefined
          : {
              x: 2,
              y: 2,
              boxShadow: "0px 0px 0px 0px #2d2d2d",
            }
      }
      transition={transitions.snappy}
      style={{ borderRadius: wobblyRadius[size] }}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors cursor-pointer",
        "font-[var(--font-body)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-0)]",
        "disabled:pointer-events-none disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
