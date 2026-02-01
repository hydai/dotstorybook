import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors } from "../../tokens";

interface ButtonProps {
  variant?: "default" | "accent" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-[#C0C0C0] text-black",
  accent: "bg-[#0000AA] text-white",
  danger: "bg-[#CC0000] text-white",
  success: "bg-[#008000] text-white",
};

const variantBorderColors: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  default: borderColors.outset,
  accent: "#6666FF #000066 #000066 #6666FF",
  danger: "#FF6666 #660000 #660000 #FF6666",
  success: "#66CC66 #003300 #003300 #66CC66",
};

const variantActiveBorderColors: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  default: borderColors.inset,
  accent: "#000066 #6666FF #6666FF #000066",
  danger: "#660000 #FF6666 #FF6666 #660000",
  success: "#003300 #66CC66 #66CC66 #003300",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export function Button({
  variant = "default",
  size = "md",
  className,
  disabled,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "retro-button inline-flex items-center justify-center gap-2",
        "font-bold uppercase tracking-wider",
        "font-[var(--font-body)]",
        "border-2 border-solid",
        "focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{
        boxShadow: shadows.outset,
        borderColor: variantBorderColors[variant],
        borderRadius: 0,
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          const target = e.currentTarget;
          target.style.boxShadow = shadows.inset;
          target.style.borderColor = variantActiveBorderColors[variant];
          target.style.transform = "translate(1px, 1px)";
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          const target = e.currentTarget;
          target.style.boxShadow = shadows.outset;
          target.style.borderColor = variantBorderColors[variant];
          target.style.transform = "translate(0, 0)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          const target = e.currentTarget;
          target.style.boxShadow = shadows.outset;
          target.style.borderColor = variantBorderColors[variant];
          target.style.transform = "translate(0, 0)";
        }
      }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
