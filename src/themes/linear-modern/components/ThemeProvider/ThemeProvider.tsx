import React from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      data-theme="linear-modern"
      className="font-sans text-[var(--color-text-primary)] bg-[var(--color-surface-0)] antialiased"
    >
      {children}
    </div>
  );
}
