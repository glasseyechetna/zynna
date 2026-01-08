// src/component/Header.jsx
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  // lock scroll when menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // esc to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full bg-black text-white">
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 pt-6 md:pt-10 pb-4 md:pb-6">
          {/* Left: Page Title */}
          <div className="text-[16px] sm:text-[18px] md:text-[22px] font-light tracking-wide">
            Contact
          </div>

          {/* Center: Logo */}
          <div className="pointer-events-none absolute left-1/2 top-6 md:top-10 -translate-x-1/2">
            <div className="flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.35em] uppercase opacity-80">
              <span>Window</span>
              <span className="font-serif text-[18px] sm:text-[20px] md:text-[22px] leading-none tracking-normal">
                WP
              </span>
              <span>Passions</span>
            </div>
          </div>

          {/* Right: Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="absolute right-4 sm:right-6 md:right-10 top-5 md:top-10 flex h-10 w-10 items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[6px]">
              <span className="h-[2px] w-6 bg-white/90" />
              <span className="h-[2px] w-6 bg-white/90" />
              <span className="h-[2px] w-6 bg-white/90" />
            </span>
          </button>
        </div>
      </header>

      {/* ================= FULLSCREEN MENU ================= */}
      <div
        className={[
          "fixed inset-0 z-[9999] bg-black text-white transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Top row */}
        <div className="relative w-full px-4 sm:px-6 md:px-10 pt-6 md:pt-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase opacity-80">
              Window
            </span>
            <span className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-none">
              WP
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase opacity-80">
              Passions
            </span>
          </div>

          {/* Close button */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-4 sm:right-6 md:right-10 top-5 md:top-10 flex h-12 w-12 items-center justify-center"
          >
            <span className="sr-only">Close</span>
            <span className="relative block h-6 w-6">
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>
        </div>

        {/* Menu items */}
        <nav className="px-4 sm:px-6 md:px-10 pt-20 md:pt-28">
          <ul className="space-y-3 md:space-y-4">
            {["HOME", "ABOUT", "CONTACT", "PROJECTS", "STUDIO"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="
                    block
                    text-[28px]
                    sm:text-[36px]
                    md:text-[44px]
                    font-semibold
                    tracking-wide
                    text-white/25
                    hover:text-white
                    transition
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom row */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
            Contact
          </div>

          <div className="flex items-center gap-5 sm:gap-7 text-[16px] sm:text-[18px] opacity-95">
            <a href="#" className="hover:opacity-70 transition">in</a>
            <a href="#" className="hover:opacity-70 transition">X</a>
            <a href="#" className="hover:opacity-70 transition">▶</a>
            <a href="#" className="hover:opacity-70 transition">f</a>
            <a href="#" className="hover:opacity-70 transition">⦿</a>
            <a href="#" className="hover:opacity-70 transition">♪</a>
          </div>
        </div>

        {/* Click outside */}
        <button
          type="button"
          aria-label="Close overlay background"
          onClick={() => setOpen(false)}
          className="absolute inset-0 -z-10"
        />
      </div>
    </>
  );
};

export default Header;
