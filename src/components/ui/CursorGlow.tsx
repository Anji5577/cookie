import React, { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="cursor-glow" className="cursor-glow transition-opacity duration-300"></div>;
}
