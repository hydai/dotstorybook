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
            className="text-xs font-medium text-[var(--color-text-muted)] font-[var(--font-mono)] uppercase tracking-[0.15em]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full bg-[var(--color-surface-2)] px-4 text-sm text-[var(--color-text-primary)]",
            "rounded-[var(--radius-md)] border-0",
            "placeholder:text-[var(--color-text-muted)]/60",
            "caret-[var(--color-accent)]",
            "font-[var(--font-mono)]",
            "transition-all duration-200",
            "focus:ring-4 focus:ring-[var(--color-accent)]/20 focus:outline-none",
            error && "ring-4 ring-[var(--color-error)]/20",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
          style={{
            boxShadow: error
              ? `${shadows.recessed}, 0 0 0 2px rgba(255, 71, 87, 0.3)`
              : shadows.recessed,
          }}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)] font-medium font-[var(--font-mono)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
