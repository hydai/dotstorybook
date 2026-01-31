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
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 md:h-14 w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 text-base",
            "text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "transition-colors duration-200",
            "focus:border-[var(--color-accent)] focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-error)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
