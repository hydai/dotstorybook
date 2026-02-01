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
            className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full rounded-full px-5 text-sm",
            "bg-white/50 border border-[var(--color-border)]",
            "text-[var(--color-text-primary)] font-[var(--font-body)]",
            "transition-all duration-500",
            "placeholder:text-[var(--color-text-muted)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error &&
              "border-[var(--color-error)] focus:ring-[var(--color-error)]/30",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)] pl-5">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
