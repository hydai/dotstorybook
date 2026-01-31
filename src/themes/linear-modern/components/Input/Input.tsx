import React from "react";
import { cn } from "@/shared/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-text-secondary)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-9 w-full rounded-[var(--radius-md)] border bg-[var(--color-surface-2)] px-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
            "border-[var(--color-border)]",
            "transition-all duration-200",
            "focus:outline-none focus:border-[var(--color-border-accent)] focus:ring-2 focus:ring-[var(--color-accent-muted)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error && "border-[var(--color-error)] focus:ring-[var(--color-error)]/20",
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
