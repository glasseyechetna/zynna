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
      {/* TOP HEADER (normal state) */}
      <header className="w-full bg-black text-white">
        <div className="relative mx-auto w-full max-w-[1400px] px-10 pt-10 pb-6">
          {/* Left: Page Title */}
          <div className="text-[22px] font-light tracking-wide">Contact</div>

          {/* Center: Logo */}
          <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase opacity-80">
              <span>Window</span>
              <span className="font-serif text-[22px] leading-none tracking-normal">
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
            className="absolute right-10 top-10 flex h-10 w-10 items-center justify-center"
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

      {/* FULLSCREEN MENU OVERLAY (like screenshot) */}
      <div
        className={[
          "fixed inset-0 z-[9999] bg-black text-white transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* top row */}
        <div className="relative w-full px-10 pt-10">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.45em] uppercase opacity-80">
              Window
            </span>
            <span className="font-serif text-[46px] leading-none">WP</span>
            <span className="text-[10px] tracking-[0.45em] uppercase opacity-80">
              Passions
            </span>
          </div>

          {/* Right: Close X */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-10 top-10 flex h-12 w-12 items-center justify-center"
          >
            <span className="sr-only">Close</span>
            <span className="relative block h-6 w-6">
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>
        </div>

        {/* menu items */}
        <nav className="px-10 pt-28">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="block text-[44px] font-semibold tracking-wide text-white/25 hover:text-white transition"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-[44px] font-semibold tracking-wide hover:text-white transition"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-[44px] font-semibold tracking-wide hover:text-white transition"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block text-[44px] font-semibold tracking-wide hover:text-white transition"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="/studio"
                className="block text-[44px] font-semibold tracking-wide hover:text-white transition"
              >
                STUDIO
              </a>
            </li>
          </ul>
        </nav>

        {/* bottom row */}
        <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
          <div className="text-[22px] font-semibold">Contact</div>

          {/* social icons (simple text icons like screenshot) */}
          <div className="flex items-center gap-7 text-[18px] opacity-95">
            <a href="#" className="hover:opacity-70 transition" aria-label="LinkedIn">
              in
            </a>
            <a href="#" className="hover:opacity-70 transition" aria-label="X">
              X
            </a>
            <a href="#" className="hover:opacity-70 transition" aria-label="YouTube">
              ▶
            </a>
            <a href="#" className="hover:opacity-70 transition" aria-label="Facebook">
              f
            </a>
            <a href="#" className="hover:opacity-70 transition" aria-label="Instagram">
              ⦿
            </a>
            <a href="#" className="hover:opacity-70 transition" aria-label="TikTok">
              ♪
            </a>
          </div>
        </div>

        {/* click outside to close */}
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
