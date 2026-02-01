import React from "react";
import "@fontsource/kalam/400.css";
import "@fontsource/kalam/700.css";
import "@fontsource/patrick-hand/400.css";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      data-theme="hand-drawn"
      className="font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface-0)] antialiased"
    >
      {children}
    </div>
  );
}
