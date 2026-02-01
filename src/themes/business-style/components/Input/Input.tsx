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
            className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-[var(--font-mono)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full bg-transparent px-0 text-sm text-[var(--color-text-primary)] font-[var(--font-body)]",
            "border-0 border-b border-[var(--color-border)]",
            "transition-all duration-300",
            "focus:outline-none focus:border-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error &&
              "border-[var(--color-error)] focus:border-[var(--color-error)]",
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
