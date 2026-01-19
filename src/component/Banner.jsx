import React, { useEffect, useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  
]

const Banner = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});

    const timer = setTimeout(() => {
      video.pause();
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-[920px] h-[520px] flex items-center justify-center">
        <video
          ref={videoRef}
          src={videos[currentIndex]}
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
