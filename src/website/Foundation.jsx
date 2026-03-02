import React from "react";

const Foundation = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-24">

      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADING */}
        <h1 className="animate-bounce text-4xl md:text-5xl font-serif mb-12">
          The Foundation
        </h1>

        {/* INTRO */}
        <p className="animate-pulse text-base md:text-lg text-gray-700 max-w-3xl mb-20 leading-relaxed">
          The Foundation reflects the essence of Zynna—our vision, values, and design journey.
        </p>

        {/* VISION */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Vision
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            We are committed to deeply personalised service, where every client’s vision is carefully understood and beautifully realised through precision, interpretation, and care.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Journey
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            With over three decades of expertise, Zynna has evolved from a craftsmanship-led foundation into a trusted name in bespoke custom curtains.
            Blending traditional tailoring with contemporary design, we continue to create timeless, made-to-measure window solutions.
          </p>
        </div>

        {/* ABOUT US */}
        <div className="mb-24">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            About Us
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            Zynna is a premium custom curtain brand creating made-to-measure curtains, drapes, sheers, and blinds tailored to your space.
            We combine high-quality fabrics, expert craftsmanship, and seamless installation to deliver elegant and personalised window solutions.
          </p>
        </div>


      </div>

    </section>
  );
};

export default Foundation;