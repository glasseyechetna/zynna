import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";


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
      {/* ZYNNA TEXTILES INTRO */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-24">
            <h2 className="animate-bounce text-4xl font-serif mb-6">
              Zynna Textiles
            </h2>

            <p className="animate-pulse text-sm text-gray-700 max-w-xl mx-auto mb-12">
              Zynna Textiles is a curated destination for premium curtain and
              upholstery fabrics, bringing together internationally acclaimed
              brands and refined homegrown labels. Our collections are selected
              for quality, design excellence, and long-lasting performance.
            </p>
       
                  
            <button className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase border-2 border-black">
           <Link to="/studio" >
              EXPLORE MORE
              </Link>
             
            </button>
          </div>

          {/* ZYNNA BRANDS */}
          <div>
            <h2 className="animate-bounce text-4xl font-serif mb-16 text-center md:text-left">
              Zynna Brands
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">

              {/* International Brands */}
              <div>
                <h3 className="animate-bounce text-lg mb-6">
                  International Brands <br />
                  at Zynna
                </h3>

                <div className="space-y-4 animate-pulse text-sm text-gray-700">
                  <p>
                    Zynna collaborates with globally renowned fabric houses,
                    offering premium collections known for innovation, texture,
                    and timeless design.
                  </p>
                  <p>
                    Our international portfolio includes brands trusted by
                    luxury homes, hospitality spaces, and design professionals
                    worldwide.
                  </p>
                  <p className="font-medium">
                    Bini, Thevenon, Fabricut, Laguna, Pik, DZ Italia, Linder,
                    Anaasa
                  </p>
                </div>
              </div>

              {/* Home Grown Brands */}
              <div>
                <h3 className="animate-bounce text-lg mb-6">
                  Home Grown Brands <br />
                  at Zynna
                </h3>

                <div className="space-y-4 animate-pulse text-sm text-gray-700">
                  <p>
                    Our homegrown brands celebrate craftsmanship, Indian
                    sensibilities, and contemporary design—crafted to meet
                    global quality standards.
                  </p>
                  <p>
                    These collections offer versatility across residential,
                    hospitality, and commercial projects.
                  </p>
                  <p className="font-medium">
                    Rumi Zara, Zynna Pallets, Linen Library, Fabric Library,
                    Thread Stories, Print Stories
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Direction Arrows */}
          <div className="flex flex-col items-center md:items-start animate-pulse">
            <span className="text-4xl">↑</span>
            <span className="text-4xl mt-6">↓</span>
          </div>

          {/* Rotating CTA Shape */}
          <div className="flex justify-center">
            <div
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              className="animate-pulse bg-black text-white px-10 py-14 text-center max-w-sm cursor-grab active:cursor-grabbing transition-transform duration-100 select-none"
              style={{
                transform: `rotate(${rotation}deg)`,
                borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%",
              }}
            >
              <p className="font-serif text-lg leading-relaxed">
                Become our Partner <br />
                & Sell our brands <br />
                in your city <br />
                Worldwide
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Textile;
