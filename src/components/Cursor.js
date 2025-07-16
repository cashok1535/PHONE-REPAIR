import { useCallback, useEffect, useState } from "react";

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      className="cursor"
      style={{
        position: "absolute",
        top: cursorPosition.y - 5,
        left: cursorPosition.x - 5,
        pointerEvents: "none",
      }}
    ></div>
  );
};
