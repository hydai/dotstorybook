import React from "react";

import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      data-theme="playful-geometric"
      className="font-[var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface-0)] antialiased"
    >
      {children}
    </div>
  );
}
