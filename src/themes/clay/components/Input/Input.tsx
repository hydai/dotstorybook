import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-bold text-[var(--color-text-secondary)] font-[var(--font-body)] tracking-wide"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-16 w-full bg-[#EFEBF5] px-6 text-base text-[var(--color-text-primary)]",
            "rounded-2xl border-0",
            "placeholder:text-[var(--color-text-muted)]/60",
            "caret-[var(--color-accent)]",
            "font-[var(--font-body)]",
            "transition-all duration-200",
            "focus:bg-white focus:ring-4 focus:ring-[var(--color-accent)]/20 focus:outline-none",
            error &&
              "ring-4 ring-[var(--color-error)]/20",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
          style={{
            boxShadow: error
              ? `${shadows.clayPressed}, 0 0 0 2px rgba(239, 68, 68, 0.3)`
              : shadows.clayPressed,
          }}
          {...props}
        />
        {error && (
          <p className="text-sm text-[var(--color-error)] font-medium font-[var(--font-body)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
