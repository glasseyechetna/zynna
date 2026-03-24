import React, { useEffect, useState } from "react";

const ZynnaLoadPage = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHide(true);
    }, 5200);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 5800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1
        style={{
          color: "white",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 300,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontSize: "clamp(2.5rem, 8vw, 7rem)",
          animation: "zynnaZoom 3.6s ease-out forwards",
        }}
      >
        Zynna
      </h1>

      <style>{`
        @keyframes zynnaZoom {
          0% {
            transform: scale(1.8);
            opacity: 0;
            letter-spacing: 0.45em;
          }
          40% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
            letter-spacing: 0.25em;
          }
        }
      `}</style>
    </div>
  );
};

export default ZynnaLoadPage;