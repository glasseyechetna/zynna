import React from "react";

const ArtAndCraft = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h1 className="animate-bounce text-4xl md:text-5xl font-serif mb-8">
          Art & Craft
        </h1>

        {/* INTRO */}
        <p className="animate-pulse text-base md:text-lg text-gray-700 max-w-3xl mb-16 leading-relaxed">
          At Zynna, it’s not just about buying a fabric and making curtains.
          Draperies are treated as pieces of art—crafted with intention,
          proportion, and an eye for detail that elevates both space and
          experience.
        </p>

        {/* CONTENT BLOCK 1 */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Draperies as Art
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            Every drapery at Zynna is conceived as a design statement. From the
            way fabric falls to how it frames light and architecture, our
            approach balances aesthetics with function. Texture, colour,
            layering, and finishing are curated meticulously to ensure each
            piece feels refined, intentional, and timeless.
          </p>
        </div>

        {/* CONTENT BLOCK 2 */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Craftsmanship & Detail
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            Our skilled artisans bring decades of experience to every project,
            transforming premium fabrics into expertly tailored curtains and
            blinds. Precision stitching, structured linings, handcrafted
            finishes, and carefully selected hardware come together to create
            window dressings that are as durable as they are elegant.
          </p>
        </div>

        {/* CONTENT BLOCK 3 */}
        <div className="mb-20">
          <h2 className="animate-bounce text-2xl md:text-3xl font-serif mb-6">
            Where Function Meets Design
          </h2>

          <p className="animate-pulse text-gray-700 max-w-4xl leading-relaxed">
            Beyond beauty, our draperies are designed to perform. Light control,
            privacy, insulation, and acoustics are seamlessly integrated into
            every design. Whether for a residence, hospitality space, or
            corporate environment, our solutions enhance both comfort and
            visual harmony.
          </p>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="max-w-4xl">
          <p className="animate-pulse text-gray-800 text-lg leading-relaxed">
            At Zynna, Art and Craft come together to create window dressings that
            do more than complete a space—they define it.
          </p>
        </div>

      </div>

    </section>
  );
};

export default ArtAndCraft;
