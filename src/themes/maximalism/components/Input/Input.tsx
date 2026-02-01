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
            className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] font-[var(--font-heading)]"
          >
            <span aria-hidden="true">&#10024; </span>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full bg-[var(--color-surface-1)]/80 backdrop-blur-sm px-5 text-sm text-[var(--color-text-primary)]",
            "rounded-full border-4 border-[#FF3AF2]",
            "placeholder:text-[var(--color-text-muted)]",
            "caret-[#00F5D4]",
            "font-[var(--font-body)]",
            "transition-all duration-200",
            "focus:border-[#FFE600] focus:ring-4 focus:ring-[#00F5D4]/40 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-0)] focus:shadow-[4px_4px_0_#00F5D4,8px_8px_0_#FFE600] focus:outline-none",
            error &&
              "border-[#FF3AF2] shadow-[0_0_10px_rgba(255,58,242,0.5)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[#FF3AF2] font-bold font-[var(--font-body)]">
            <span aria-hidden="true">&#128165; </span>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
