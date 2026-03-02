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
              Zynna Textiles is a curated destination for premium fabrics,
              bringing together select international and homegrown brands.
              Designed for residential, hospitality, and commercial spaces, our
              collections balance design integrity, material quality, and
              long-term performance.
            </p>


          </div>

          {/* ZYNNA BRANDS */}
          <div>
            <h2 className="animate-bounce text-4xl font-serif mb-16 text-center md:text-left">
              Zynna Brands
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">
              {/* INTERNATIONAL BRANDS */}
              <div>
                <h3 className="animate-bounce text-lg mb-6">
                  International Brands <br />
                  at Zynna
                </h3>

                <div className="space-y-4 animate-pulse text-sm text-gray-700">
                  <p>
                    Zynna Textiles represents some of the most respected
                    international textile houses, known globally for their
                    design heritage, innovation, and quality standards:
                  </p>

                  <p className="font-medium">
                    Bini, Thevenon, Fabricut, Laguna, Pik, DZ Italia, Linder,
                    Anaasa
                  </p>

                  <p>
                    These brands bring global design sensibilities and technical
                    expertise, offering fabrics that meet international standards
                    of quality and performance.
                  </p>
                </div>
              </div>

              {/* HOMEGROWN BRANDS */}
              <div>
                <h3 className="animate-bounce text-lg mb-6">
                  Homegrown Brands <br />
                  at Zynna
                </h3>

                <div className="space-y-4 animate-pulse text-sm text-gray-700">
                  <p>
                    Alongside international collections, Zynna Textiles proudly
                    showcases thoughtfully developed homegrown brands that
                    reflect contemporary design, material honesty, and
                    craftsmanship:
                  </p>

                  <p className="font-medium">
                    Rumi Zara, Zynna Palettes, Linen Library, Fabric Library,
                    Thread Stories, Print Stories
                  </p>
                </div>

              </div>

            </div>

          </div>
          <br />  <br /><br />
          <h2 className="font-medium text-lg">
            Partner With Zynna Textiles
          </h2>

          <p className="text-sm text-gray-700 mt-2">
            Zynna Textiles offers opportunities to retail and represent our brands worldwide.
          </p>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* DIRECTION ARROWS */}
          <div className="flex flex-col items-center md:items-start animate-pulse">
            <span className="text-4xl">↑</span>
            <span className="text-4xl mt-6">↓</span>
          </div>

          {/* ROTATING CTA SHAPE */}
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
                Partner With Zynna Textiles <br />
                Retail & Represent <br />
                Our Brands <br />
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