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
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-[var(--font-display)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full bg-transparent px-0 text-sm text-[var(--color-text-primary)] font-[var(--font-body)]",
            "border-0 border-b-2 border-[var(--color-border)]",
            "transition-all duration-300",
            "focus:outline-none focus:border-[var(--color-accent)]",
            "focus:shadow-[0_4px_8px_-4px_rgba(201,169,98,0.3)]",
            "placeholder:text-[var(--color-text-muted)] placeholder:italic",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error &&
              "border-[var(--color-secondary)] focus:border-[var(--color-secondary)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-secondary)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
