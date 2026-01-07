
import React, { useState } from "react";


const Studio = () => {
    const [open, setOpen] = useState(1);

  return (
    <>
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex items-center justify-between relative">

        {/* LEFT – Circle with diagonal text */}
        <div className="relative z-10">
          <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-white">

            {/* ST */}
            <span className="absolute top-[90px] left-[90px] 
                             font-serif text-5xl md:text-6xl text-black">
              ST
            </span>

            {/* UD */}
            <span className="absolute top-[170px] left-[170px] 
                             font-serif text-5xl md:text-6xl text-black">
              UD
            </span>

            {/* IO */}
            <span className="absolute top-[250px] left-[250px] 
                             font-serif text-5xl md:text-6xl text-black">
              IO
            </span>

          </div>
        </div>

        {/* RIGHT – Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773668/Studio-hero-image-940x1024_agxgss.webp"
            alt="Studio Display"
            className="w-[320px] md:w-[420px] lg:w-[680px] object-cover"
          />
        </div>

      </div>
      
      
    </section>

    {/* STUDIO DESCRIPTION SECTION */}
<section className="w-full bg-black py-24 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT – Image */}
    <div className="flex justify-center lg:justify-start">
      <div className=" p-4">
        <img
          src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773779/1qw-576x1024_rocaxs.webp"
          alt="Studio Sketch"
          className="w-[300px] sm:w-[360px] md:w-[620px] object-contain"
        />
      </div>
    </div>

    {/* RIGHT – Text */}
    <div className="text-white font-light leading-snug text-2xl sm:text-3xl md:text-4xl">
      Located in the heart of Delhi, our studio is a hub of creativity where every
      piece is crafted with meticulous attention to detail, ensuring that each
      design not only enhances your space but also reflects our commitment to
      excellence.
    </div>

  </div>
</section>
{/* STUDIO DETAIL IMAGE SECTION */}
<section className="w-full bg-black py-32 flex justify-center">
  <div className="relative">

    {/* Tassel */}
    <img
      src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773454/Wp-2_rpxhuf.webp"
      alt="Decorative Tassel"
      className="absolute -left-24 top-10 w-38 md:w-56"
    />

    {/* Main Image */}
    <img
      src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773220/wb1_bwyzyd.webp"
      alt="Studio Sketch"
      className="w-[280px] sm:w-[340px] md:w-[500px] object-contain"
    />

  </div>
</section>
{/* BESPOKE JOURNEY SECTION */}
<section className="w-full bg-black py-32 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-light leading-tight tracking-wide">
        BESPOKE <br /> JOURNEY
      </h2>

      <p className="mt-10 max-w-xl text-white/80 text-sm sm:text-base leading-relaxed">
        With over three decades of experience in the industry, our skilled
        artisans possess the expertise to meticulously transform your design
        vision into an exquisite curtain or blind. Tulio Bespoke opens up a
        world of possibilities, where traditional motifs and contemporary
        forms alike come to life through the delicate intricacies of our
        craftsmanship
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773220/wp2_lwuxpv.webp"
        alt="Bespoke Fabric Swatches"
        className="w-[300px] sm:w-[360px] md:w-[620px] object-contain"
      />
    </div>

  </div>
</section>
{/* OVERLAPPED IMAGE SECTION */}
<section className="w-full bg-black py-40 px-6">
  <div className="max-w-10xl mx-auto flex justify-end">
    
    <div className="relative w-[420px] sm:w-[720px] md:w-[900px]">

      {/* BACK IMAGE */}
      <img
        src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767772315/samples/two-ladies.jpg"
        alt="Fabric Texture"
        className="w-[260px] sm:w-[300px] md:w-[340px] md:h-[500px] object-cover absolute left-0 top-16 z-10"
      />

      {/* FRONT IMAGE */}
      <img
        src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767772315/cld-sample.jpg"
        alt="Embroidery Sketch"
        className="w-[300px] sm:w-[360px] md:w-[200px] object-cover relative z-20"
      />

    </div>

  </div>
 
</section>

{/* METHOD SECTION */}
<section className="w-full bg-black text-white px-6 py-32 mt-60">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-light">
      Method
    </h2>

    <p className="mt-6 text-white/70 max-w-xl">
      Our process is designed to ensure precision and satisfaction from
      concept to completion.
    </p>

    {/* Divider */}
    <div className="border-t border-white/40 my-20"></div>

    {/* Accordion Item 01 */}
    <div>
      <div
        className="flex items-start justify-between cursor-pointer py-14"
        onClick={() => setOpen(open === 1 ? null : 1)}
      >
        <div>
          <span className="block text-3xl mb-6">01</span>
          <h3 className="text-4xl sm:text-5xl font-light">
            Design Consult
          </h3>
        </div>

        <span className="text-4xl font-light">
          {open === 1 ? "−" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80 max-w-3xl pb-14 leading-relaxed">
          Your journey begins with a personalized consultation, where we explore
          your style preferences and the functional needs of your space. Our
          experts guide you through a selection of designs and materials suited
          to your home’s aesthetics.
        </p>
      </div>

      <div className="border-t border-white/40"></div>
    </div>

    {/* Accordion Item 02 */}
    <div>
      <div
        className="flex items-start justify-between cursor-pointer py-14"
        onClick={() => setOpen(open === 2 ? null : 2)}
      >
        <div>
          <span className="block text-3xl mb-6">02</span>
          <h3 className="text-4xl sm:text-5xl font-light">
             Quotation
          </h3>
        </div>

        <span className="text-4xl font-light">
          {open === 2 ? "−" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80 max-w-3xl pb-14 leading-relaxed">
          Following the consult, we provide a detailed quotation outlining the costs and specifications of your
           chosen designs. This transparent pricing ensures there are no surprises, just clarity and fairness in
            every quote.

        </p>
      </div>

      <div className="border-t border-white/40"></div>
    </div>

    
    {/* Accordion Item 03 */}
    <div>
      <div
        className="flex items-start justify-between cursor-pointer py-14"
        onClick={() => setOpen(open === 3 ? null : 3)}
      >
        <div>
          <span className="block text-3xl mb-6">03</span>
          <h3 className="text-4xl sm:text-5xl font-light">
            Measurement
          </h3>
        </div>

        <span className="text-4xl font-light">
          {open === 3 ? "−" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80 max-w-3xl pb-14 leading-relaxed">
       
    Precision is key, which is why our specialists meticulously measure your windows to guarantee a perfect fit.
     We consider every aspect of the window’s architecture to ensure the final product will be exactly as envisioned.

        </p>
      </div>

      <div className="border-t border-white/40"></div>
    </div>

    {/* Accordion Item 04 */}
    <div>
      <div
        className="flex items-start justify-between cursor-pointer py-14"
        onClick={() => setOpen(open === 4 ? null : 4)}
      >
        <div>
          <span className="block text-3xl mb-6">04</span>
          <h3 className="text-4xl sm:text-5xl font-light">
              Construction
          </h3>
        </div>

        <span className="text-4xl font-light">
          {open === 4 ? "−" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80 max-w-3xl pb-14 leading-relaxed">
        
   Our skilled artisans take over to craft your window dressings with the utmost care and attention to detail.
    Using only the finest materials, we construct each piece to meet our high standards of quality and durability.

        </p>
      </div>

      <div className="border-t border-white/40"></div>
    </div>

    {/* Accordion Item 05 */}
    <div>
      <div
        className="flex items-start justify-between cursor-pointer py-14"
        onClick={() => setOpen(open === 5 ? null : 5)}
      >
        <div>
          <span className="block text-3xl mb-6">05</span>
          <h3 className="text-4xl sm:text-5xl font-light">
              Installation
          </h3>
        </div>

        <span className="text-4xl font-light">
          {open === 5 ? "−" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === 5 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/80 max-w-3xl pb-14 leading-relaxed">
       
     The final step in our process is the installation, handled by our professional team. 
     They ensure your window treatments are installed seamlessly and function perfectly, transforming your 
     space with elegance and style.



        </p>
      </div>

      <div className="border-t border-white/40"></div>
    </div>
   

  </div>
</section>

{/* OVERLAPPED IMAGES SECTION */}
<section className="w-full bg-black py-40 px-6">
  <div className="max-w-7xl mx-auto flex justify-center relative">

    <div className="relative">

      {/* BACK IMAGE */}
      <img
        src="https://res-console.cloudinary.com/dp5koojwa/thumbnails/v1/image/upload/v1767772315/c2FtcGxlcy9jb2ZmZWU=/drilldown"
        alt="Interior Curtain"
        className="w-[520px] sm:w-[600px] md:w-[680px] object-cover rounded-sm"
      />

      {/* FRONT IMAGE */}
      <img
        src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767772315/cld-sample-3.jpg"
        alt="Yarn Texture"
        className="w-[260px] sm:w-[300px] md:w-[340px] object-cover absolute -right-20 top-24 z-20 rounded-sm"
      />

    </div>

  </div>
</section>
{/* LET'S WORK TOGETHER SECTION */}
<section className="w-full bg-black py-48 px-6">
  <div className="max-w-7xl mx-auto flex justify-center">

    <div className="relative w-full h-[520px]">

      {/* PENTAGON */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2">
        <div className="relative w-[360px] h-[460px] bg-[#5c5c60]">
          {/* Roof */}
          <div
            className="absolute -top-[160px] left-0 w-0 h-0
                       border-l-[180px] border-r-[180px]
                       border-b-[160px]
                       border-l-transparent
                       border-r-transparent
                       border-b-[#5c5c60]"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 text-white/70 font-light leading-tight">
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          Let’s work 
        </div>

        <div className="italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="not-italic">together.↗</span>
        </div>
      </div>

    </div>

  </div>
</section>



    </>
  );
};

export default Studio;
