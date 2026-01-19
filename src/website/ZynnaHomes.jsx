import React from "react";

const ZynnaHomes = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">

        {/* THE STORIES WE TELL */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif mb-6">
            The Stories we tell ........
          </h2>

          <div className=" p-8 md:p-12">
            <p className="text-sm text-gray-700 mb-12">
              Some lines about us..........................
            </p>

            <div className="flex justify-center">
              <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* CONCEPT */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif mb-4">
            Concept
          </h2>
          <p className="text-xl font-serif mb-12">
            Deer Park, Eco , ........
          </p>

          {/* Flow Boxes */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Box 1 */}
            <div className="w-40 h-40 border-2 border-black rounded-xl"></div>

            {/* Arrow */}
            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* Box 2 */}
            <div className="w-40 h-40 border-2 border-black rounded-xl"></div>

            {/* Arrow */}
            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* Box 3 */}
            <div className="w-40 h-40 border-2 border-black rounded-xl"></div>

            {/* Arrow */}
            <span className="text-3xl rotate-90 md:rotate-0">→</span>

            {/* Box 4 */}
            <div className="w-40 h-40 border-2 border-black rounded-xl"></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ZynnaHomes;
