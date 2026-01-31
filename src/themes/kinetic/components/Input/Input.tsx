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
      <div className="flex flex-col gap-3">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-24 w-full bg-transparent border-b-2 px-0 text-4xl font-bold uppercase tracking-tighter",
            "text-[var(--color-text-primary)]",
            "border-[var(--color-border)]",
            "placeholder:text-[var(--color-surface-3)] placeholder:uppercase",
            "transition-colors duration-200",
            "focus:border-[var(--color-accent)] focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-error)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
