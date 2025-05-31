import React, { useState, useEffect } from "react";

export default function GlowingCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX + window.scrollX, 
        y: e.clientY + window.scrollY 
        });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative top-0 left-0 w-full h-full pointer-events-none z-50">
      <div
        style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: "translate(-50%, -50%)", 
            background: "radial-gradient(circle, rgb(214, 214, 227) 0%, rgba(126, 121, 182, 0.5) 70%, rgba(67,56,202,0) 100%)",
        }}
        className="relative w-[60px] h-[60px] rounded-full blur-2xl pointer-events-none transition-transform "
      />
    </div>
  );
}
