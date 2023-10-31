"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      cursorRef.current && cursorRef.current.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none invisible absolute z-50 h-5 w-5 rounded-full border bg-whiteish mix-blend-difference sm:visible"
      id="custom-cursor"
      aria-label="custom rounded cursor"
    ></div>
  );
}
