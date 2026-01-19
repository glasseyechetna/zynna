import React, { useRef, useState } from "react";

const Textile = () => {
  const startY = useRef(0);
  const [rotation, setRotation] = useState(0);

  const handleStart = (e) => {
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleMove = (e) => {
    if (!startY.current) return;

    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = startY.current - currentY;

    setRotation((prev) => prev + deltaY * 0.2);
    startY.current = currentY;
  };

  const handleEnd = () => {
    startY.current = 0;
  };

  return (
    <>
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">

          {/* ZYNNA TEXTILES */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif mb-6">
              Zynna Textiles........
            </h2>

            <p className="text-sm text-gray-700 max-w-xl mx-auto mb-12">
              Some lines about us..........................
            </p>

            <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase border-2 border-black">
              Explore More
            </button>
          </div>

          {/* ZYNNA BRANDS */}
          <div>
            <h2 className="text-4xl font-serif mb-16 text-center md:text-left">
              Zynna Brands
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">

              {/* International Brands */}
              <div>
                <h3 className="text-lg mb-6">
                  International Brands <br />
                  at Zynna ( with logo )
                </h3>

                <div className="space-y-2">
                  <div className="border-b border-dotted border-black"></div>
                  <div className="border-b border-dotted border-black"></div>
                  <div className="border-b border-dotted border-black"></div>
                  <div className="text-xl">..</div>
                </div>
              </div>

              {/* Home Grown Brands */}
              <div>
                <h3 className="text-lg mb-6">
                  Home Grown Brands <br />
                  at Zynna ( with logo )
                </h3>

                <div className="space-y-2">
                  <div className="border-b border-dotted border-black"></div>
                  <div className="border-b border-dotted border-black"></div>
                  <div className="border-b border-dotted border-black"></div>
                  <div className="text-xl">..</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Arrows (no text now) */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-4xl">↑</span>
            <span className="text-4xl mt-6">↓</span>
          </div>

          {/* Rotating Black Shape */}
          <div className="flex justify-center">
            <div
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              className="bg-black text-white px-10 py-14 text-center max-w-sm cursor-grab active:cursor-grabbing transition-transform duration-100 select-none"
              style={{
                transform: `rotate(${rotation}deg)`,
                borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%",
              }}
            >
              <p className="font-serif text-lg leading-relaxed">
                Become our Partner <br />
                & Sell our brands <br />
                in your city : <br />
                world Wide
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Textile;
