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
          The foundation of Zynna is built on craftsmanship, experience, and a
          deeply personalised approach to window dressing. Every design begins
          with understanding the client’s vision and translating it into
          refined, functional elegance.
        </p>

        {/* VISION */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Our Vision
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            We are committed to personalised service, ensuring every client’s
            vision is beautifully realised through our exquisite collections.
            Our goal is to create bespoke curtains and window dressings that
            enhance architecture, elevate interiors, and stand the test of
            time.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Our Journey
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            With over three decades of experience in the industry, Zynna’s
            journey is defined by expertise and evolution. Our skilled artisans
            and specialists meticulously transform design concepts into
            expertly crafted curtains and blinds—combining tradition with
            contemporary techniques.
          </p>
        </div>

        {/* ABOUT US */}
        <div className="mb-24">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            About Zynna
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            Zynna is a luxury curtain and window dressing brand catering to
            residential, hospitality, and corporate spaces. From premium
            textiles and bespoke drapery to precise installation, we offer
            end-to-end solutions rooted in quality, detail, and design
            integrity.
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

export default Foundation;
