import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors } from "../../tokens";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-bold text-black font-[var(--font-body)] uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-8 w-full bg-white px-2 text-sm text-black",
            "border-2 border-solid",
            "font-[var(--font-body)]",
            "placeholder:text-[#808080]",
            "caret-black",
            "focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2",
            error && "bg-[#FFE0E0]",
            "disabled:cursor-not-allowed disabled:bg-[#C0C0C0] disabled:text-[#808080]",
            className
          )}
          style={{
            boxShadow: shadows.inset,
            borderColor: error
              ? "#FF0000 #FF9999 #FF9999 #FF0000"
              : borderColors.inset,
            borderRadius: 0,
          }}
          {...props}
        />
        {error && (
          <p className="text-xs text-[#FF0000] font-bold font-[var(--font-body)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
