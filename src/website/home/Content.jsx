import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const circles = [
  { id: 0, label: "Find Us", link: "/find-us" },
  { id: 1, label: "The Foundation", link: "/foundation" },
  { id: 2, label: "The Studio", link: "/studio" },
  { id: 3, label: "Art and Craft", link: "/art-and-craft" },
];

const Content = () => {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  // 🔁 ONLY rotate circles
  const nextCircle = () => {
    setActive((prev) => (prev + 1) % circles.length);
    setRotation((prev) => prev - 90);
  };

  // 🔗 ONLY navigate on text click
  const handleTextClick = (link) => {
    navigate(link);
  };

  return (
    <section className="w-full bg-[#f6f1ec] py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">
            About us
          </h2>

          <p className="text-gray-800 leading-relaxed max-w-md">
            A Top Curtain Fabric Company in India and also Best Curtain shops in
            Gurgaon & Luxury Curtain stores in Gurgaon. At Zynna, we are
            passionate about creating elegant window treatments.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 text-sm tracking-wider">
            EXPLORE MORE
          </button>
        </div>

        {/* RIGHT ROTATING CIRCLES */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="relative w-[420px] h-[420px] transition-transform duration-700 ease-in-out"
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
                    ${isActive ? "border-black scale-105 z-20" : "border-black/70 z-10"}
                  `}
                >
                  {/* COUNTER ROTATED CONTENT */}
                  <div
                    className="text-center px-4"
                    style={{ transform: `rotate(${-rotation}deg)` }}
                  >
                    {/* 🔗 TEXT CLICK = NAVIGATION */}
                    <p
                      onClick={() => handleTextClick(circle.link)}
                      className="text-lg font-medium text-black cursor-pointer"
                    >
                      {circle.label}
                    </p>

                    {/* 🔁 ARROW CLICK = ROTATION ONLY */}
                    {isActive && (
                      <button
                        onClick={nextCircle}
                        className="mt-4 w-10 h-10 rounded-full border-2 border-black
                                   flex items-center justify-center mx-auto
                                   transition-transform duration-300 active:rotate-45"
                        aria-label="Next section"
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
      {/* TOP TAGLINE BOXES */}
      <section className="w-full bg-[#f6f1ec] pt-10 pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">

            {/* TAG 1 */}
            <div>
              <div className="bg-black text-white py-3 px-4 text-sm tracking-widest">
                ZYNNA
              </div>
              <p className="mt-2 text-xs text-black">
                Tagline
              </p>
            </div>

            {/* TAG 2 */}
            <div>
              <div className="bg-black text-white py-3 px-4 text-sm tracking-widest">
                ZYNNA TEXTILE
              </div>
              <p className="mt-2 text-xs text-black">
                Tagline
              </p>
            </div>

            {/* TAG 3 */}
            <div>
              <div className="bg-black text-white py-3 px-4 text-sm tracking-widest">
                ZYNNA HOMES
              </div>
              <p className="mt-2 text-xs text-black">
                Tagline
              </p>
            </div>

            {/* TAG 4 */}
            <div>
              <div className="bg-black text-white py-3 px-4 text-sm tracking-widest">
                RSD
              </div>
              <p className="mt-2 text-xs text-black">
                Tagline
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR CURRENT PROJECT SECTION */}
      <section className="w-full bg-[#f6f1ec] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-16">
            Our Current Project
          </h2>

          {/* TOP 3 PROJECTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

            {/* Project 1 */}
            <div className="flex flex-col items-start">
              <div className="w-full h-[320px] border-[6px] border-black"></div>
              <p className="mt-4 text-sm text-black">
                DLF PHASE 2 (Gurugram) <br /> (ONLY SITE NAME)
              </p>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-start">
              <div className="w-full h-[320px] border-[6px] border-black"></div>
              <p className="mt-4 text-sm text-black">
                Delhi (NCR)
              </p>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col items-start">
              <div className="w-full h-[320px] border-[6px] border-black"></div>
              <p className="mt-4 text-sm text-black">
                MUMBAI
              </p>
            </div>

          </div>

          {/* LARGE BOTTOM PROJECT */}
          <div className="max-w-3xl">
            <div className="w-full h-[380px] border-[6px] border-black"></div>
            <p className="mt-4 text-sm text-black">
              Delhi (NCR)
            </p>
          </div>

        </div>
      </section>

    </section>

  );
};

export default Content;
