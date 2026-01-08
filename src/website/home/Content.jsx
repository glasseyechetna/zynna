import React, { useEffect } from "react";

const Content = () => {

  // 🔹 ONE SIMPLE OBSERVER (replays animation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center relative px-6">
        <h1 className="reveal opacity-0 animate-zoom-in delay-2 text-white text-center font-light leading-tight tracking-wide 
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl">
          Bespoke by Window <br />
          Passions, savors the privilege <br />
          of personalisation, albeit at a <br />
          marginally higher cost.
        </h1>

        <p className="reveal opacity-0 animate-zoom-in absolute bottom-10 text-xs tracking-[0.25em] text-gray-500 uppercase">
          A Soft Furnishing Consultancy
        </p>
      </section>

      {/* ================= STUDIO VISUAL ================= */}
      <section className="relative bg-black text-white min-h-screen px-10 py-20">
        <div className="reveal opacity-0 animate-section delay-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="w-full h-[320px] lg:h-[380px] overflow-hidden">
            <img
              src="https://windowpassions.com/wp-content/uploads/2025/01/12.webp"
              alt="Craftsmanship"
              className="reveal opacity-0 animate-image-reveal w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-end">
            <img
              src="https://windowpassions.com/wp-content/uploads/2025/01/3.webp"
              alt="Technical Drawing"
              className="reveal opacity-0 animate-fade-right w-[260px] opacity-90"
            />
          </div>
        </div>

        <div className="mt-24 max-w-3xl">
          <h2 className="reveal opacity-0 animate-fade-up font-light text-3xl sm:text-4xl leading-snug">
            We blend traditional craftsmanship <br />
            with modern aesthetics to create <br />
            unique window dressings.
          </h2>
        </div>

        <div className="absolute bottom-16 right-16">
          <div className="reveal opacity-0 animate-fade-up w-100 h-100 rounded-full bg-white text-black flex items-center justify-center text-5xl font-light cursor-pointer hover:scale-105 transition">
            Studio ↗
          </div>
        </div>
      </section>

      {/* ================= PROJECTS VISUAL ================= */}
      <section className="relative bg-black min-h-screen px-12 py-20 overflow-hidden">
        <div className="absolute left-6 top-20 w-72 opacity-90">
          <img
            src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767775256/4-1_l9bbyy.webp"
            alt="Curtain Sketch"
            className="reveal opacity-0 animate-fade-left w-full"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="https://windowpassions.com/wp-content/uploads/2025/01/Wp-website-elements-05-1536x862.webp"
            alt="Embroidered Fabric"
            className="reveal opacity-0 animate-image-reveal w-[70%] max-w-4xl"
          />
        </div>

        <div className="absolute top-[35%] left-1/2 -translate-x-1/2">
          <img
            src="https://windowpassions.com/wp-content/uploads/2025/01/Wp-website-elements-06.webp"
            alt="Fabric Detail"
            className="reveal opacity-0 animate-zoom-in w-[420px]"
          />
        </div>

        <div className="absolute left-28 bottom-44">
          <div className="reveal opacity-0 animate-fade-up w-60 h-60 bg-[#8B4528] rotate-45 flex items-center justify-center cursor-pointer hover:scale-105 transition">
            <span className="text-white text-4xl font-light -rotate-45">
              Projects ↗
            </span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US VISUAL ================= */}
      <section className="relative bg-black min-h-screen flex items-center overflow-hidden px-16">
        <div className="absolute left-16 top-1/2 -translate-y-1/2">
          <h1 className="reveal opacity-0 animate-fade-up text-white font-serif text-[260px] leading-none tracking-tight">
            WP
          </h1>
        </div>

        <div className="relative mx-auto flex items-center justify-center">
          <div className="relative w-[360px] h-[300px] bg-[#4b4b4b] flex items-center justify-center">
            <div
              className="absolute -top-[140px] left-0 w-0 h-0
                         border-l-[180px] border-r-[180px]
                         border-b-[140px]
                         border-l-transparent
                         border-r-transparent
                         border-b-[#4b4b4b]"
            />
            <div className="reveal opacity-0 animate-fade-up absolute text-center text-white/70 font-serif">
              <div className="text-5xl tracking-[0.25em]">ABOUT</div>
              <div className="text-4xl italic mt-2">US</div>
            </div>
          </div>
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2">
          <img
            src="https://windowpassions.com/wp-content/uploads/2025/01/Wp-website-elements-08-811x1024.webp"
            className="reveal opacity-0 animate-fade-right w-[320px]"
            alt="Fabric rolls"
          />
        </div>
      </section>

      {/* ================= METHOD ================= */}
      <section className="relative bg-black px-16 py-24 overflow-hidden text-white">
        <div className="flex justify-between items-start mb-24">
          <div className="reveal opacity-0 animate-fade-up relative flex items-start gap-10">
            <img
              src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767775256/3_uxd4fx.webp"
              alt="Sketch"
              className="reveal opacity-0 animate-fade-left w-52 opacity-80"
            />
            <h1 className="text-7xl font-light tracking-tight">
              Method ↗
            </h1>
          </div>

          <p className="reveal opacity-0 animate-fade-up text-lg font-light tracking-wide">
            Consult, Concept, Execution, Handover
          </p>
        </div>

        <div className="grid grid-cols-2 items-start px-24">
          <img
            src="https://windowpassions.com/wp-content/uploads/2025/01/Wp-website-elements-13-1021x1024.webp"
            className="reveal opacity-0 animate-fade-left w-[340px]"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/dp5koojwa/image/upload/v1767773220/wb1_bwyzyd.webp"
            className="reveal opacity-0 animate-fade-right w-[560px]"
            alt=""
          />

          <img
            src="https://windowpassions.com/wp-content/uploads/2025/01/Wp-website-elements-11-1024x574.webp"
            className="reveal opacity-0 animate-image-reveal col-span-1 w-[620px] mt-10"
            alt=""
          />

          <img
            src="https://windowpassions.com/wp-content/uploads/2025/01/13-1024x683.webp"
            className="reveal opacity-0 animate-image-reveal w-[480px] justify-self-end mt-10"
            alt=""
          />
        </div>
      </section>

      {/* ================= LET'S WORK TOGETHER ================= */}
      <section className="relative bg-black min-h-screen flex items-center overflow-hidden">

        <div className="reveal opacity-0 animate-fade-up absolute left-[38%] top-1/2 -translate-y-1/2
                        w-[280px] h-[420px] bg-gradient-to-b from-[#3b2722] to-[#241613]
                        [clip-path:polygon(50%_0%,100%_20%,100%_100%,0%_100%,0%_20%)]" />

        <div className="absolute left-[52%] top-1/2 -translate-y-1/2">
          <h1 className="reveal opacity-0 animate-zoom-in text-white font-light leading-tight
                         text-6xl md:text-7xl lg:text-8xl">
            Let’s work <br />
            together
          </h1>
        </div>

      </section>
    </>
  );
};

export default Content;
