import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white text-[#832a32]">
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="/" aria-label="Zynna Home" className="block">
            <div className="h-25 w-50" >
            <img
              src="https://res.cloudinary.com/dp5koojwa/image/upload/v1768461543/zynna-logo-redv4_teqsfn.png"
              alt="Zynna"
              className="h-full w-full object-contain"
            /></div>
          </a>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-3 text-lg hover:opacity-80"
          >
            <span className="tracking-wide">menu</span>
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* DIVIDER LINE */}
        <div className="w-full h-px bg-white/40" />
      </header>

      {/* SLIDE MENU */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white text-[#832a32] z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Main navigation"
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-2xl hover:opacity-70"
        >
          <FaTimes />
        </button>

        {/* MENU LINKS */}
        <ul className="mt-24 px-8 space-y-6 text-lg">
          <li><a href="/zynna" className="hover:opacity-70">zynna</a></li>
          <li><a href="/textile" className="hover:opacity-70">zynna textile</a></li>
          <li><a href="/homes" className="hover:opacity-70">zynna homes</a></li>
          <li><a href="/rsd" className="hover:opacity-70">RSD</a></li>
        </ul>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
