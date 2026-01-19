import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black px-6 md:px-24 pt-24">

      {/* ABOUT US – HERO */}
      <section className="w-full bg-black py-28 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">

          <div className="relative w-full h-[420px]">

            {/* PENTAGON */}
            <div className="absolute left-[15%] top-1/2 -translate-y-1/2">
              <div className="relative w-[360px] h-[320px] bg-[#5c5c60]">
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

            {/* TEXT */}
            <div className="absolute left-[22%] top-1/2 -translate-y-1/2 text-white/70 font-light leading-tight">
              <div className="italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="not-italic animate-bounce">
                  About <br /> Zynna
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="flex items-start gap-5 mt-16 ml-124">

          <div className="flex gap-3 pt-2">
            <span className="w-3 h-20 bg-[#d9d9d9]" />
            <span className="w-3 h-20 bg-[#d9d9d9]" />
            <span className="w-3 h-20 bg-[#d9d9d9]" />
          </div>

          <p className="animate-pulse text-white text-3xl leading-snug max-w-xl">
            Zynna is a luxury curtain and window dressing brand, redefining
            interiors through bespoke design, refined textiles, and
            precision-led execution across residential, hospitality, and
            corporate spaces.
          </p>

        </div>
      </section>

      {/* LEGACY */}
      <section className="w-full bg-black px-6 md:px-24 py-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <div className="w-full rounded-xl overflow-hidden animate-pulse">
            <img
              src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767774350/Wp-website-elements-22-1024x487_uycj8m.webp"
              alt="Zynna legacy of craftsmanship"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>

          <p className="animate-pulse text-white text-3xl md:text-5xl font-light text-center leading-tight max-w-5xl mt-12">
            With over three decades of experience, Zynna has built a legacy
            rooted in craftsmanship, quality materials, and timeless window
            dressing solutions that elevate spaces across India and beyond.
          </p>

        </div>
      </section>

      {/* PERSONALIZED SERVICE */}
      <section className="w-full bg-black px-6 md:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div className="flex justify-start animate-pulse">
            <div className="relative bg-[#f6e6c3]">
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black" />

              <img
                src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767774432/Wp-website-elements-25-1024x1022_h6p0ig.webp"
                alt="Bespoke window dressings by Zynna"
                className="w-[300px] md:w-[760px] object-contain bg-[#fff6dc]"
              />
            </div>
          </div>

          <div>
            <p className="animate-pulse text-white text-4xl md:text-5xl leading-snug max-w-xl">
              We are committed to personalized service—ensuring every client’s
              vision is beautifully realized through our exquisite collections,
              thoughtful detailing, and end-to-end execution.
            </p>
          </div>

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
                Let’s work
              </div>
              <div className="italic animate-bounce text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
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
