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
            className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] font-[var(--font-mono)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full bg-black/50 px-4 text-sm text-[var(--color-text-primary)]",
            "rounded-t-lg border-b-2 border-white/20",
            "placeholder:text-[var(--color-text-muted)]",
            "caret-[var(--color-accent)]",
            "font-[var(--font-body)]",
            "transition-all duration-200",
            "focus:border-b-[var(--color-accent)] focus:shadow-[0_2px_8px_rgba(247,147,26,0.3)] focus:outline-none",
            error && "border-b-[var(--color-error)] shadow-[0_2px_8px_rgba(239,68,68,0.3)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)] font-medium font-[var(--font-body)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
