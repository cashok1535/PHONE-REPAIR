import { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return ()=>{
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove]);
  return (
    <div className="App">
      <div
        className="cursor"
        style={{
          position: "absolute",
          top: cursorPosition.y,
          left: cursorPosition.x,
        }}
      ></div>
      <Header />
    </div>
  );
}

export default App;
