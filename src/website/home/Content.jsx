import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const circles = [
  { id: 0, label: "Find Us", link: "/find-us" },
  { id: 1, label: "The Foundation", link: "/foundation" },
  { id: 2, label: "The Studio", link: "/studio" },
  { id: 3, label: "Art and Craft", link: "/art-and-craft" },
];

const brandLinks = [
  { name: "Zynna", link: "/zynna" },
  { name: "Zynna Textiles", link: "/textiles" },
  { name: "Zynna Homes", link: "/homes" },
  { name: "RSD", link: "/rsd" },
];

const Content = () => {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  const nextCircle = () => {
    setActive((prev) => (prev + 1) % circles.length);
    setRotation((prev) => prev - 90);
  };

  const handleTextClick = (link) => {
    navigate(link);
  };

  return (
    <section className="w-full bg-[#f6f1ec] overflow-hidden">

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <h2 className="animate-bounce text-4xl md:text-5xl font-serif mb-6 text-black">
              About Us
            </h2>

            <p className="animate-pulse text-gray-800 leading-relaxed max-w-md">
              Zynna is a luxury curtain and window dressing brand offering
              bespoke solutions crafted with precision, artistry, and decades
              of experience across residential, hospitality, and corporate
              spaces.
            </p>

            <button className="animate-bounce mt-8 bg-black text-white px-8 py-3 text-sm tracking-wider">
              <Link to="/studio">
                Explore More
              </Link>
            </button>
          </div>

          {/* RIGHT – ROTATING CIRCLES */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="relative w-[420px] h-[420px] transition-transform duration-700 ease-in-out animate-pulse"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {circles.map((circle, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2",
                  "right-0 top-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2",
                  "left-0 top-1/2 -translate-y-1/2",
                ];

                const isActive = active === index;

                return (
                  <div
                    key={circle.id}
                    className={`
                      absolute ${positions[index]}
                      w-[200px] h-[200px]
                      rounded-full border-[4px]
                      flex items-center justify-center
                      transition-all duration-700
                      animate-pulse
                      ${isActive ? "border-black scale-105 z-20" : "border-black/60 z-10"}
                    `}
                  >
                    <div
                      className="text-center px-4"
                      style={{ transform: `rotate(${-rotation}deg)` }}
                    >
                      <p
                        onClick={() => handleTextClick(circle.link)}
                        className="animate-pulse text-lg font-medium text-black cursor-pointer"
                      >
                        {circle.label}
                      </p>

                      {isActive && (
                        <button
                          onClick={nextCircle}
                          className="animate-bounce mt-4 w-10 h-10 rounded-full border-2 border-black
                                     flex items-center justify-center mx-auto"
                        >
                          →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* BRAND TAGS */}
      <section className="py-16 px-6 md:px-20">
        <div className="animate-bounce max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {brandLinks.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="group"
            >
              <div className="bg-black text-white py-3 px-4 text-sm tracking-widest
                              transition-all duration-300
                              group-hover:bg-white group-hover:text-black
                              group-hover:border group-hover:border-black">
                {item.name}
              </div>

              <p className="mt-2 text-xs text-black transition-opacity duration-300
                            group-hover:opacity-70">
                Bespoke Design & Craft
              </p>
            </Link>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="animate-bounce text-4xl md:text-5xl font-serif text-black mb-16">
            Our Current Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {["DLF Phase 2 – Gurugram", "Delhi NCR", "Mumbai"].map((site, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="animate-pulse w-full h-[320px] border-[6px] border-black"></div>
                <p className="animate-pulse mt-4 text-sm text-black">
                  {site}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="animate-pulse w-full h-[380px] border-[6px] border-black"></div>
            <p className="animate-pulse mt-4 text-sm text-black">
              Delhi NCR
            </p>
          </div>

        </div>
      </section>

    </section>
  );
};

export default Content;
