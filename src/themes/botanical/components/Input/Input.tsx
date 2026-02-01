import React from "react";
import { cn } from "@/shared/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "underlined" | "pill";
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "underlined", label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full text-sm text-[var(--color-text-primary)] font-[var(--font-body)]",
            "transition-all duration-500",
            "placeholder:text-[var(--color-text-muted)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            variant === "underlined" && [
              "bg-transparent px-0",
              "border-0 border-b border-[var(--color-border)]",
              "focus:outline-none focus:border-[var(--color-accent)]",
            ],
            variant === "pill" && [
              "bg-[var(--color-surface-2)] px-5",
              "border border-transparent rounded-full",
              "focus:outline-none focus:border-[var(--color-accent)]",
            ],
            error && "border-[var(--color-error)] focus:border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
