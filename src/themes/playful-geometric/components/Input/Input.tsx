import React from "react";
import { cn } from "@/shared/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-[var(--font-heading)] text-xs font-bold uppercase tracking-wide text-[var(--color-text-primary)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full rounded-[var(--radius-md)] px-4",
            "bg-[var(--color-surface-1)]",
            "border-2 border-[var(--color-text-primary)]",
            "shadow-[var(--shadow-sm)]",
            "font-[var(--font-body)] text-sm text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "transition-shadow duration-200",
            "focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-accent)] focus:border-[var(--color-accent)]",
            error &&
              "border-[var(--color-error)] shadow-[4px_4px_0px_0px_var(--color-error)] focus:shadow-[4px_4px_0px_0px_var(--color-error)]",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
        {error && (
          <p className="text-xs font-medium text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
