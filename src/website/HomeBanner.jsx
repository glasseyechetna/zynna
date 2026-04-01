import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const bannerImages = [
  {
    image:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1774349304/Classical_Ivory_Royale_ced54w.jpg",
    link: "/zynna",
    title: "Zynna",
    subtitle: "Zynna",
  },
  {
    image:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1774349304/Neo_Classical_Grand_Alabaster_pmkysx.jpg",
    link: "/textile",
    title: "Zynna Textile",
    subtitle: "Zynna Textile",
  },
  {
    image:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1774349304/Modern_Ananda_2_rtfba8.jpg",
    link: "/homes",
    title: "Zynna Homes",
    subtitle: "Zynna Homes",
  },
  {
    image:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1774349304/Commercial_Aventador_lowrle.jpg",
    link: "/rsd",
    title: "Zynna RSD",
    subtitle: "Zynna RSD",
  },
];

const HomeBanner = ({ loaderFinished }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (loaderFinished) setCurrentSlide(0);
  }, [loaderFinished]);

  useEffect(() => {
    if (!loaderFinished) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [loaderFinished]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  // FIXED swipe (more reliable)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="w-full h-[100svh] md:h-[500px] lg:h-screen overflow-hidden bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {bannerImages.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`absolute inset-0 block transition-opacity duration-700 ${
              currentSlide === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-end justify-center text-center px-4 pb-12 sm:pb-14 md:pb-16">
              <div className="text-white">
                <h2 className="text-[18px] sm:text-[20px] md:text-3xl lg:text-5xl font-light uppercase">
                  {item.title}
                </h2>

                <p className="mt-2 text-[13px] sm:text-sm md:text-lg font-light">
                  {item.subtitle}
                </p>

                <div className="mt-5">
                  <span className="inline-block border border-white/80 px-4 py-2 text-[12px] sm:text-[13px] md:text-sm uppercase hover:bg-white hover:text-black transition">
                    Discover More
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* DESKTOP ARROWS (slightly bigger) */}
        <button
          onClick={goToPrevSlide}
          className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white text-4xl lg:text-5xl cursor-pointer"
        >
          ‹
        </button>

        <button
          onClick={goToNextSlide}
          className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white text-4xl lg:text-5xl cursor-pointer"
        >
          ›
        </button>

        {/* dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] w-6 sm:w-8 md:w-12 ${
                currentSlide === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;