import React from "react";

const ZynnaHomes = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">

        {/* THE STORIES WE TELL */}
        <div className="mb-24">
          <h2 className="animate-bounce text-4xl font-serif mb-6">
            The Stories We Tell
          </h2>

          <div className="p-8 md:p-12">
            <p className="animate-pulse text-sm text-gray-700 mb-12 leading-relaxed">
              Zynna Homes is driven by storytelling through spaces. Each home is
              envisioned as a narrative—shaped by its surroundings, materials,
              and the people who inhabit it. Our approach blends thoughtful
              design, functionality, and refined aesthetics to create homes
              that feel personal, timeless, and deeply connected to their
              environment.
            </p>

            <div className="flex justify-center">
              <button className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* CONCEPT */}
        <div className="mb-24">
          <h2 className="animate-bounce text-4xl font-serif mb-4">
            Concept
          </h2>

          <p className="animate-pulse text-xl font-serif mb-12">
            Deer Park • Eco • Contemporary Living
          </p>

          {/* FLOW BOXES */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* CONCEPT 1 */}
            <div className="animate-pulse w-40 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Context-Driven Design Inspired by Nature and Surroundings
            </div>

            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* CONCEPT 2 */}
            <div className="animate-pulse w-40 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Sustainable Materials and Eco-Conscious Planning
            </div>

            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* CONCEPT 3 */}
            <div className="animate-pulse w-40 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Balanced Architecture with Refined Interior Detailing
            </div>

            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* CONCEPT 4 */}
            <div className="animate-pulse w-40 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Homes Designed for Comfort, Longevity, and Lifestyle
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ZynnaHomes;
