import { useCallback, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return { ref, position, handleMouseMove };
}
