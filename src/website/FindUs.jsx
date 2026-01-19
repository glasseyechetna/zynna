import React from "react";

const FindUs = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h1 className="animate-bounce text-4xl md:text-5xl font-serif mb-10">
          Find Us
        </h1>

        {/* INTRO */}
        <p className="animate-pulse text-base md:text-lg text-gray-700 max-w-3xl mb-16 leading-relaxed">
          Connect with Zynna for bespoke curtain solutions, premium textiles,
          and expertly crafted window dressings. Our studio serves as a creative
          hub for design consultations, collaborations, and project planning.
        </p>

        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

          {/* ADDRESS */}
          <div>
            <h2 className="animate-bounce text-2xl font-serif mb-6">
              Studio Address
            </h2>
            <p className="animate-pulse text-gray-700 leading-relaxed">
              Zynna Studio <br />
              Located at the cross-section of New Delhi and Gurgaon <br />
              India
            </p>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="animate-bounce text-2xl font-serif mb-6">
              Get in Touch
            </h2>
            <p className="animate-pulse text-gray-700 leading-relaxed">
              Email: <span className="font-medium">info@zynna.com</span> <br />
              Phone: <span className="font-medium">+91 XXXXX XXXXX</span>
            </p>
          </div>

        </div>

        {/* GLOBAL AVAILABILITY */}
        <div className="mb-24">
          <h2 className="animate-bounce text-2xl font-serif mb-6">
            Worldwide Presence
          </h2>
          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            Zynna Textiles and Zynna Homes are available at some of the most
            premium drapery showrooms, furniture stores, and interior design
            offices worldwide. We collaborate with architects, designers, and
            partners across cities and countries to deliver refined window
            dressing solutions globally.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="animate-bounce bg-black text-white text-xs px-8 py-4 tracking-widest uppercase">
            Contact Us
          </button>
        </div>

      </div>

    </section>
  );
};

export default FindUs;
