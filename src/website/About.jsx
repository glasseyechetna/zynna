import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black px-6 md:px-24 pt-24">
      

{/* LET'S WORK / ABOUT US SECTION */}
<section className="w-full bg-black py-28 px-6">
  <div className="max-w-7xl mx-auto flex justify-center">

    <div className="relative w-full h-[420px]">

      {/* PENTAGON */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2">
        <div className="relative w-[360px] h-[320px] bg-[#5c5c60]">
          {/* Roof */}
          <div
            className="absolute -top-[120px] left-0 w-0 h-0
                       border-l-[180px] border-r-[180px]
                       border-b-[120px]
                       border-l-transparent
                       border-r-transparent
                       border-b-[#5c5c60]"
          />
        </div>
      </div>

      {/* TEXT (closer to pentagon) */}
      <div className="absolute left-[22%] top-1/2 -translate-y-1/2 text-white/70 font-light leading-tight">
        <div className="italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="not-italic animate-in zoom-in fade-in
          ">
            About <br /> Us
          </span>
        </div>
      </div>

    </div>
  </div>

  {/* ROW 2 — BARS + TEXT */}
  <div className="flex items-start gap-5 mt-16 ml-124">

    {/* Vertical Bars */}
    <div className="flex gap-3 pt-2">
      <span className="w-3 h-20 bg-[#d9d9d9]" />
      <span className="w-3 h-20 bg-[#d9d9d9]" />
      <span className="w-3 h-20 bg-[#d9d9d9]" />
    </div>

    {/* Text */}
    <p className="text-white text-3xl leading-snug max-w-xl ">
      Window Passions redefines elegance with each design, integrating
      luxury with functionality in our window treatments.
    </p>

  </div>
</section>

      {/* LEGACY SECTION */}
<section className="w-full bg-black px-6 md:px-24 py-32">
  <div className="max-w-7xl mx-auto flex flex-col items-center">

    {/* Image */}
    <div className="w-full rounded-xl overflow-hidden">
      <img
        src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767774350/Wp-website-elements-22-1024x487_uycj8m.webp"
        alt="Window Passions Legacy"
        className="w-full h-[320px] md:h-[420px] object-cover"
      />
    </div>

    {/* Text BELOW Image */}
    <p className="text-white text-3xl md:text-5xl font-light text-center leading-tight max-w-5xl mt-12">
      Our legacy of quality spans over three decades, curating
      environments that inspire.
    </p>

  </div>
</section>
{/* PERSONALIZED SERVICE SECTION */}
<section className="w-full bg-black px-6 md:px-24 py-32">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* LEFT — Framed Image */}
    <div className="flex justify-start">
      <div className="relative bg-[#f6e6c3] ">
        {/* Corner details */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black" />

        {/* Image */}
        <img
          src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767774432/Wp-website-elements-25-1024x1022_h6p0ig.webp"
          alt="Window Passions Drapery"
          className="w-[300px] md:w-[760px] object-contain bg-[#fff6dc]"
        />
      </div>
    </div>

    {/* RIGHT — Text */}
    <div>
      <p className="text-white text-4xl md:text-5xl leading-snug max-w-xl">
        We are committed to personalized service, ensuring every client’s
        vision is beautifully realized through our exquisite collections
      </p>
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



    </section>

    
  );
};

export default About;
