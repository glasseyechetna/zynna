import React, { useState } from "react";

const Studio = () => {
  const [open, setOpen] = useState(1);

  return (
    <>
      {/* STUDIO HERO */}
      <section className="w-full min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex items-center justify-between relative">

          {/* LEFT – CIRCLE */}
          <div className="relative z-10">
            <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-white">
              <span className="absolute top-[90px] left-[90px] font-serif text-5xl md:text-6xl text-black">
                ST
              </span>
              <span className="absolute top-[170px] left-[170px] font-serif text-5xl md:text-6xl text-black">
                UD
              </span>
              <span className="absolute top-[250px] left-[250px] font-serif text-5xl md:text-6xl text-black">
                IO
              </span>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative animate-pulse">
            <img
              src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773668/Studio-hero-image-940x1024_agxgss.webp"
              alt="Zynna Design Studio Gurgaon Delhi"
              className="w-[320px] md:w-[420px] lg:w-[680px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* STUDIO DESCRIPTION */}
      <section className="w-full bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center lg:justify-start animate-pulse">
            <img
              src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773779/1qw-576x1024_rocaxs.webp"
              alt="Zynna Studio Sketches and Concepts"
              className="w-[300px] sm:w-[360px] md:w-[620px] object-contain"
            />
          </div>

          <div className="animate-pulse text-white font-light leading-snug text-2xl sm:text-3xl md:text-4xl">
            Located at the cross-section of New Delhi and Gurgaon, Zynna’s
            20,000 sq. ft. experience and design centre is a creative hub where
            ideas take form. Every piece is developed with meticulous attention
            to detail, ensuring each design enhances the space while reflecting
            our commitment to excellence.
          </div>

        </div>
      </section>

      {/* DETAIL IMAGE */}
      <section className="w-full bg-black py-32 flex justify-center">
        <div className="relative animate-pulse">
          <img
            src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773454/Wp-2_rpxhuf.webp"
            alt="Curtain Detailing and Craftsmanship"
            className="absolute -left-24 top-10 w-38 md:w-56"
          />
          <img
            src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773220/wb1_bwyzyd.webp"
            alt="Studio Fabric Detailing"
            className="w-[280px] sm:w-[340px] md:w-[500px] object-contain"
          />
        </div>
      </section>

      {/* BESPOKE JOURNEY */}
      <section className="w-full bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          <div className="flex flex-col justify-center">
            <h2 className="animate-bounce text-white text-5xl sm:text-6xl md:text-7xl font-light leading-tight tracking-wide">
              Bespoke <br /> Journey
            </h2>

            <p className="animate-pulse mt-10 max-w-xl text-white/80 text-sm sm:text-base leading-relaxed">
              With over three decades of experience, Zynna’s skilled artisans
              meticulously transform design visions into exquisite curtains and
              blinds. Each creation reflects a balance of traditional
              craftsmanship and contemporary design—crafted to suit both
              residential and commercial spaces.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end animate-pulse">
            <img
              src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773220/wp2_lwuxpv.webp"
              alt="Bespoke Fabric Selection at Zynna"
              className="w-[300px] sm:w-[360px] md:w-[620px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* METHOD */}
      <section className="w-full bg-black text-white px-6 py-32 mt-60">
        <div className="max-w-6xl mx-auto">

          <h2 className="animate-bounce text-5xl sm:text-6xl md:text-7xl font-light">
            Method
          </h2>

          <p className="animate-pulse mt-6 text-white/70 max-w-xl">
            Our process is designed to ensure precision, transparency, and
            satisfaction—from concept to completion.
          </p>

          <div className="border-t border-white/40 my-20"></div>

          {[
            {
              id: 1,
              title: "Design Consult",
              text:
                "Your journey begins with a personalised consultation where we understand your style preferences and functional needs, guiding you through suitable designs and materials.",
            },
            {
              id: 2,
              title: "Quotation",
              text:
                "A detailed quotation is provided outlining specifications and costs, ensuring complete clarity and fairness before execution.",
            },
            {
              id: 3,
              title: "Measurement",
              text:
                "Our specialists conduct precise measurements to guarantee a perfect fit, considering every architectural detail.",
            },
            {
              id: 4,
              title: "Construction",
              text:
                "Skilled artisans craft each window dressing using premium materials, maintaining the highest standards of quality and durability.",
            },
            {
              id: 5,
              title: "Installation",
              text:
                "Professional installation ensures seamless functioning and a refined finish, transforming the space with elegance.",
            },
          ].map((item) => (
            <div key={item.id}>
              <div
                className="flex items-start justify-between cursor-pointer py-14"
                onClick={() => setOpen(open === item.id ? null : item.id)}
              >
                <div>
                  <span className="block text-3xl mb-6">{`0${item.id}`}</span>
                  <h3 className="text-4xl sm:text-5xl font-light">
                    {item.title}
                  </h3>
                </div>
                <span className="text-4xl font-light">
                  {open === item.id ? "−" : "+"}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="animate-pulse text-white/80 max-w-3xl pb-14 leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="border-t border-white/40"></div>
            </div>
          ))}

        </div>
      </section>

      {/* LET’S WORK TOGETHER */}
      <section className="w-full bg-black py-48 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">

          <div className="relative w-full h-[520px]">

            <div className="absolute left-[15%] top-1/2 -translate-y-1/2">
              <div className="relative w-[360px] h-[460px] bg-[#5c5c60]">
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

            <div className="absolute left-[30%] top-1/2 -translate-y-1/2 text-white/70 font-light leading-tight">
              <div className="animate-bounce text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                Let’s Work
              </div>
              <div className="italic animate-bounce text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="not-italic">Together.↗</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Studio;
