import React from "react";

const ZynnaHomes = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        {/* THE STORIES WE TELL */}
        <div className="mb-24">
          <h2 className="animate-bounce text-4xl font-serif mb-6">
            Zynna Homes
          </h2>

          <div className="p-8 md:p-12">
            <p className="animate-pulse text-sm text-gray-700 mb-12 leading-relaxed">
              Zynna Homes is a concept-led interior collection built around
              storytelling, where materials, textures, and colours come together
              to create cohesive living spaces. Designed with intention, each
              collection offers continuity, meaning, and a strong design identity
              beyond trends.
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
            The Stories We Tell
            
          </h2>

          <p className="animate-pulse text-xl font-serif mb-12">
            Each collection is inspired by environments, moods and ways of living.< br/>
            Deer Park • Eco • Global Availability
          </p>

          {/* FLOW BOXES */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* CONCEPT 1 */}
            <div className="animate-pulse w-50 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Deer Park — Inspired by nature and calmness, featuring organic
              textures and soft, balanced tones.
            </div>

            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* CONCEPT 2 */}
            <div className="animate-pulse w-50 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Eco — Rooted in sustainability and material honesty, celebrating
              simplicity, natural finishes, and mindful design.
            </div>

            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* CONCEPT 3 */}
            <div className="animate-pulse w-50 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Global Availability — Zynna Homes collections are available
              worldwide through select premium showrooms, furniture stores, and
              design studios aligned with our design values.
            </div>

            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* CONCEPT 4 */}
            <div className="animate-pulse w-50 h-40 border-2 border-black rounded-xl flex items-center justify-center text-center text-sm px-3">
              Each collection is inspired by environments, moods, and ways of
              living—created to feel cohesive, intentional, and timeless.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZynnaHomes;