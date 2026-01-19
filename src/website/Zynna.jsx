import React from "react";

const Zynna = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-16 py-20">

      {/* OUR PHILOSOPHY */}
      <div className="max-w-6xl mx-auto p-10">

        <h2 className="animate-bounce text-4xl font-serif mb-2">
          Our Philosophy
        </h2>

        <p className="animate-pulse text-sm text-gray-600 mb-8">
          At Zynna, we believe that window dressings are not just functional
          elements but an extension of personal style, architectural intent,
          and refined craftsmanship. Every curtain and blind is designed to
          elevate the space it inhabits.
        </p>

        {/* Bespoke Luxury */}
        <div className="mb-8">
          <h3 className="animate-pulse font-semibold text-base mb-3">
            Bespoke Luxury
          </h3>
          <p className="animate-pulse text-sm text-gray-700 mb-4">
            Our bespoke luxury approach ensures that every curtain and blind is
            tailored to the exact proportions, light conditions, and aesthetic
            language of your space. From fabric selection to finishing details,
            each element is customised to deliver timeless elegance.
          </p>
          <div className="animate-pulse border-black w-full"></div>
        </div>

        {/* Sales Pitch */}
        <div className="mb-12">
          <h3 className="animate-pulse font-semibold text-base mb-3">
            Sales Pitch
          </h3>
          <p className="animate-pulse text-sm text-gray-700 mb-4">
            With over three decades of experience, Zynna offers end-to-end window
            dressing solutions—from design consultation and premium textiles to
            precision installation. Trusted by homeowners, hospitality leaders,
            and corporate clients, we combine aesthetics with durability and
            performance.
          </p>
          <div className="animate-pulse  border-black w-full"></div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
            Explore More
          </button>
        </div>

      </div>

      {/* OUR CLIENTS */}
      <div className="max-w-6xl mx-auto mt-20">

        <h2 className="animate-bounce text-4xl font-serif mb-12">
          Our Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

          {/* Hospitality */}
          <div>
            <h4 className="animate-pulse text-lg mb-6">Hospitality</h4>
            <div className="space-y-4 animate-pulse text-sm text-gray-700">
              <p>
                Luxury hotels, boutique properties, serviced apartments, and
                hospitality spaces that require premium curtains and blinds
                combining elegance, privacy, and functionality.
              </p>
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="animate-pulse text-lg mb-6">Corporate</h4>
            <div className="space-y-4 animate-pulse text-sm text-gray-700">
              <p>
                Corporate offices, commercial buildings, boardrooms, and work
                environments seeking refined window treatments that enhance
                professionalism, comfort, and visual appeal.
              </p>
            </div>
          </div>

          {/* Fraternity Patrons */}
          <div>
            <h4 className="animate-pulse text-lg mb-6">Fraternity Patrons</h4>
            <div className="space-y-4 animate-pulse text-sm text-gray-700">
              <p>
                Architects, interior designers, developers, and design
                consultants who partner with Zynna for bespoke curtains,
                high-quality textiles, and reliable execution.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* OUR PROCESS */}
      <section className="w-full bg-white text-black py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="animate-bounce text-4xl font-serif mb-4">
            Our Process
          </h2>

          <p className="animate-pulse text-sm text-gray-700 max-w-2xl mb-16">
            Our process is thoughtfully designed to ensure precision,
            transparency, and satisfaction at every stage—transforming concepts
            into expertly crafted and seamlessly installed window dressings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Design Consult */}
            <div className="flex flex-col items-center">
              <h3 className="animate-pulse text-lg mb-6">Design Consult</h3>
              <p className="animate-pulse text-sm text-gray-700 mb-6 text-center max-w-sm">
                Your journey begins with a personalised consultation where we
                understand your design vision, functional needs, and spatial
                requirements before recommending suitable fabrics and styles.
              </p>
              <div className="animate-pulse w-full h-[260px] md:h-[360px] border-4 border-black"></div>
            </div>

            {/* Quotation */}
            <div className="flex flex-col items-center">
              <h3 className="animate-pulse text-lg mb-6">Quotation</h3>
              <p className="animate-pulse text-sm text-gray-700 mb-6 text-center max-w-sm">
                Following the consultation, we provide a detailed and
                transparent quotation outlining materials, specifications, and
                costs—ensuring clarity and confidence before execution.
              </p>
              <div className="animate-pulse w-full h-[260px] md:h-[360px] border-4 border-black"></div>
            </div>

          </div>

          <div className="flex justify-center mt-16">
            <button className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
              Explore More
            </button>
          </div>

        </div>
      </section>

      {/* ALL OUR PROJECTS */}
      <section className="w-full bg-white text-black py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="animate-bounce text-4xl font-serif mb-16">
            All Our Projects
          </h2>

          <p className="animate-pulse text-sm text-gray-700 max-w-2xl mb-16">
            Zynna has successfully delivered bespoke curtain and window dressing
            projects across major cities in India, serving residential,
            hospitality, and commercial spaces with consistency and precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            <div className="flex flex-col items-center">
              <div className="animate-pulse w-full h-[260px] md:h-[360px] border-4 border-black"></div>
              <p className="animate-pulse mt-6 text-base">South Delhi</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="animate-pulse w-full h-[260px] md:h-[360px] border-4 border-black"></div>
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
