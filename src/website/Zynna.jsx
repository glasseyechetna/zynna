import React from "react";

const Zynna = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-16 py-20">
      
      {/* OUR PHILOSOPHY */}
      <div className="max-w-6xl mx-auto p-10">
        
        <h2 className="text-4xl font-serif mb-2">
          Our Philosophy
        </h2>

        <p className="text-sm text-gray-600 mb-8">
          Explain Little bit about our Philosophy
        </p>

        {/* Bespoke Luxury */}
        <div className="mb-8">
          <h3 className="font-semibold text-base mb-3">
            Bespoke Luxury:
          </h3>
          <div className="border-b border-dotted border-black w-full"></div>
        </div>

        {/* Sales Pitch */}
        <div className="mb-12">
          <h3 className="font-semibold text-base mb-3">
            Sales Pitch:
          </h3>
          <div className="border-b border-dotted border-black w-full"></div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
            Explore More
          </button>
        </div>

      </div>

      {/* OUR CLIENTS */}
      <div className="max-w-6xl mx-auto mt-20">
        
        <h2 className="text-4xl font-serif mb-12">
          Our clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

          {/* Hospitality */}
          <div>
            <h4 className="text-lg mb-6">Hospitality</h4>
            <div className="space-y-2">
              <div className="border-b border-dotted border-black"></div>
              <div className="border-b border-dotted border-black"></div>
              <div className="border-b border-dotted border-black"></div>
              <div className="text-xl">..</div>
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-lg mb-6">Corporate</h4>
            <div className="space-y-2">
              <div className="border-b border-dotted border-black"></div>
              <div className="border-b border-dotted border-black"></div>
              <div className="border-b border-dotted border-black"></div>
              <div className="text-xl">..</div>
            </div>
          </div>

          {/* Fraternity Patrons */}
          <div>
            <h4 className="text-lg mb-6">FraternityPatrons</h4>
            <div className="space-y-2">
              <div className="border-b border-dotted border-black"></div>
              <div className="border-b border-dotted border-black"></div>
              <div className="border-b border-dotted border-black"></div>
              <div className="text-xl">..</div>
            </div>
          </div>

        </div>
      </div>

      {/* OUR PROCESS */}
<section className="w-full bg-white text-black px-6 md:px-16 py-20">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl font-serif mb-4">
      Our Process
    </h2>

    <p className="text-sm text-gray-700 max-w-2xl mb-16">
      Our process is designed to ensure precision and satisfaction from concept
      to completion. <span className="font-semibold">(Explain Little bit about our Process)</span>
    </p>

    {/* Process Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

      {/* Design Consult */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg mb-6">Design Consult</h3>

        <div className="w-full h-[260px] md:h-[360px] border-4 border-black"></div>
      </div>

      {/* Quotation */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg mb-6">Quotation</h3>

        <div className="w-full h-[260px] md:h-[360px] border-4 border-black"></div>
      </div>

    </div>

    {/* Button */}
    <div className="flex justify-center mt-16">
      <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
        Explore More
      </button>
    </div>

  </div>
</section>
{/* ALL OUR PROJECTS */}
<section className="w-full bg-white text-black px-6 md:px-16 py-20">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl font-serif mb-16">
      All Our Projects
    </h2>

    {/* Project Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

      {/* South Delhi */}
      <div className="flex flex-col items-center">
        <div className="w-full h-[260px] md:h-[360px] border-4 border-black"></div>
        <p className="mt-6 text-base">South Delhi</p>
      </div>

      {/* Kolkata */}
      <div className="flex flex-col items-center">
        <div className="w-full h-[260px] md:h-[360px] border-4 border-black"></div>
        <p className="mt-6 text-base">Kolkata</p>
      </div>

    </div>

    {/* Button */}
    <div className="flex justify-center mt-16">
      <button className="bg-black text-white text-xs px-6 py-3 tracking-widest uppercase">
        Explore More
      </button>
    </div>

  </div>
</section>


    </section>
  );
};

export default Zynna;
