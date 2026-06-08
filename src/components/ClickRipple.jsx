import { useEffect, useState } from "react";

function ClickRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="fixed z-[9999] pointer-events-none"
          style={{
            left: r.x,
            top: r.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="block w-10 h-10 rounded-full border border-cyan-400 animate-ping" />
        </span>
      ))}
    </>
  );
}

export default ClickRipple;