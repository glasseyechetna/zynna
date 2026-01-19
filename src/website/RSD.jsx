import React from "react";

const RSD = () => {
  return (
    <>
      {/* ABOUT RSD */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-serif mb-6">
            About RSD
          </h2>

          <div className="border border-gray-300 p-8 md:p-12 mb-24">
            <p className="text-sm text-gray-700 mb-12">
              Some lines about ..................................
            </p>

            <div className="flex justify-center">
              <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
                Explore More
              </button>
            </div>
          </div>

          {/* COSMETIC STYLING AND DETAILING */}
          <div className="mb-24">
            <h2 className="text-4xl font-serif mb-6">
              Cosmetic Styling and detailing:
            </h2>

            <div className="space-y-3 mb-16">
              <div className="border-b border-dotted border-black w-full"></div>
              <div className="border-b border-dotted border-black w-full"></div>
            </div>

            <div className="flex justify-center">
              <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
                Explore More
              </button>
            </div>
          </div>

        </div>
        {/* INCLUSIONS AND EXCLUSIONS */}
<section className="w-full bg-white text-black px-6 md:px-16 py-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-serif mb-16">
      Inclusions and exclusions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center mb-32">

      {/* Inclusions */}
      <div>
        <h3 className="text-2xl font-serif mb-6">
          Inclusions
        </h3>

        <div className="space-y-3">
          <div className="border-b border-dotted border-black"></div>
          <div className="border-b border-dotted border-black"></div>
          <div className="border-b border-dotted border-black w-1/2 mx-auto"></div>
        </div>
      </div>

      {/* Exclusions */}
      <div>
        <h3 className="text-2xl font-serif mb-6">
          exclusions
        </h3>

        <div className="space-y-3">
          <div className="border-b border-dotted border-black"></div>
          <div className="border-b border-dotted border-black"></div>
          <div className="border-b border-dotted border-black w-1/2 mx-auto"></div>
        </div>
      </div>

    </div>

    {/* THE JOURNEY */}
    <div className="text-center">
      <h2 className="text-4xl font-serif mb-20">
        The Journey
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">

        {/* Quotation */}
        <div>
          <h3 className="text-2xl font-serif mb-6">
            Quotation
          </h3>

          <div className="space-y-3">
            <div className="border-b border-dotted border-black"></div>
            <div className="border-b border-dotted border-black"></div>
            <div className="border-b border-dotted border-black w-1/2 mx-auto"></div>
          </div>
        </div>

        {/* Measurement */}
        <div>
          <h3 className="text-2xl font-serif mb-6">
            Measurement
          </h3>

          <div className="space-y-3">
            <div className="border-b border-dotted border-black"></div>
            <div className="border-b border-dotted border-black"></div>
            <div className="border-b border-dotted border-black w-1/2 mx-auto"></div>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
          Explore More
        </button>
      </div>

    </div>

  </div>
</section>

      </section>
    </>
  );
};

export default RSD;
