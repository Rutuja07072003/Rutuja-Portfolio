import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 175}px, ${position.y - 175}px)`,
      }}
    >
      <div className="w-[350px] h-[350px] rounded-full bg-cyan-400/15 blur-[140px]" />
    </div>
  );
}

export default CursorGlow;