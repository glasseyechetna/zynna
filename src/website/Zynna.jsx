import React from "react";

const Zynna = () => {
  return (
    <section className="w-full bg-white text-black py-20">

      <div className="max-w-6xl mx-auto px-6 md:px-16">

        {/* OUR PHILOSOPHY */}
        <div className="animate-pulse text-xl font-serif mb-12">
          <p>
            Zynna Window Dressings is the core of our design practice. We specialise
            in bespoke curtains and blinds designed to soften architecture, control
            light, and complete a space. Every solution is custom-created,
            considering aesthetics, functionality, and proportion.
          </p>

          <br /><br /><br />

          <h2 className="animate-bounce text-4xl font-serif mb-2">
            Our Philosophy – Bespoke Luxury
          </h2>

          <div className="mb-8">
            <h3 className="animate-pulse font-semibold text-base mb-3">
              Bespoke Luxury
            </h3>
            <p className="animate-pulse text-sm text-gray-700 mb-4">
              At Zynna, luxury is a tailored experience. Every space is unique, and
              each solution is custom-designed with careful attention to
              architecture, lifestyle, materials, and proportions, ensuring
              timeless elegance over trends.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="animate-pulse font-semibold text-base mb-3">
              Value-Driven Design
            </h3>
            <p className="animate-pulse text-sm text-gray-700 mb-4">
              Our approach is built on clarity and trust. We guide clients through
              informed design decisions by explaining materials, craftsmanship,
              and long-term value, aligning aesthetics with functionality,
              durability, and transparent budgeting.
            </p>
          </div>
        </div>

        {/* OUR CLIENTS */}
        <div className="mt-20">
          <h2 className="animate-bounce text-4xl font-serif mb-12">Our Clients</h2>

          <p className="animate-pulse text-sm text-gray-700 max-w-2xl mb-16">
            Zynna Window Dressings works with a discerning clientele who value
            quality, craftsmanship, and reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <h4 className="animate-pulse text-lg mb-6">Hospitality & Corporate</h4>
              <p className="animate-pulse text-sm text-gray-700">
                We partner with hotels, offices, and commercial spaces, delivering
                durable, high-performance window solutions that balance
                functionality with refined aesthetics.
              </p>
            </div>

            <div>
              <h4 className="animate-pulse text-lg mb-6">
                Design Fraternity & Patrons
              </h4>
              <p className="animate-pulse text-sm text-gray-700">
                We collaborate with architects, interior designers, and private
                patrons, offering bespoke solutions executed with precision while
                respecting the creative vision.
              </p>
            </div>

            <div>
              <h4 className="animate-pulse text-lg mb-6">Our Process</h4>
              <p className="animate-pulse text-sm text-gray-700">
                Design Consultation → Quotation → Measurement → Construction →
                Installation
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* OUR PROCESS */}
      <section className="w-full bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <h2 className="animate-bounce text-4xl font-serif mb-4">Our Process</h2>

          <p className="animate-pulse text-sm text-gray-700 max-w-2xl mb-16">
            Design Consultation → Quotation → Measurement → Construction →
            Installation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col items-center">
              <h3 className="animate-pulse text-lg mb-6">Design Consultation</h3>
              <p className="animate-pulse text-sm text-gray-700 text-center max-w-sm">
                A personalised discussion to understand your style, space, and
                functional needs, guided by our design experts.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="animate-pulse text-lg mb-6">Quotation</h3>
              <p className="animate-pulse text-sm text-gray-700 text-center max-w-sm">
                Clear and detailed pricing outlining specifications and costs,
                ensuring complete transparency.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="animate-pulse text-lg mb-6">Measurement</h3>
              <p className="animate-pulse text-sm text-gray-700 text-center max-w-sm">
                Precise on-site measurements to guarantee a perfect fit and
                flawless execution.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="animate-pulse text-lg mb-6">Construction</h3>
              <p className="animate-pulse text-sm text-gray-700 text-center max-w-sm">
                Expertly crafted by skilled artisans using premium materials and
                meticulous detailing.
              </p>
            </div>

            <div className="flex flex-col items-center md:col-span-2">
              <h3 className="animate-pulse text-lg mb-6">Installation</h3>
              <p className="animate-pulse text-sm text-gray-700 text-center max-w-xl">
                Professional installation ensuring seamless functionality and a
                refined final finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL OUR PROJECTS */}
      <section className="w-full bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <h2 className="animate-bounce text-4xl font-serif mb-16">
            All Our Projects
          </h2>

          <p className="animate-pulse text-sm text-gray-700 max-w-2xl mb-16">
            Zynna has successfully delivered bespoke curtain and window dressing
            projects across major cities in India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col items-center">
              <p className="animate-pulse mt-6 text-base">South Delhi</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="animate-pulse mt-6 text-base">Kolkata</p>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
              Explore More
            </button>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Zynna;