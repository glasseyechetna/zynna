import React, { useEffect, useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

const Banner = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (e) {}
    };

    playVideo();

    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  return (
    <section className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">
      <div className="w-full h-full">
        <video
          ref={videoRef}
          key={currentIndex}
          src={videos[currentIndex]}
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;