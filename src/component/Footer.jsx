import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <section className="w-full bg-[#f6f2ee] py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT – CLIPBOARD VISUAL */}
    <div className="flex justify-center">
      <div className="relative w-64 h-80 bg-black rounded-lg flex flex-col justify-center px-8">

        {/* CLIP */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-10 bg-black rounded-t-xl"></div>

        {/* CHECKLIST */}
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white"></div>
              </div>
              <div className="h-1 w-32 bg-white/80"></div>
            </div>
          ))}
        </div>

        {/* PERSON ICON */}
        <div className="absolute bottom-6 right-6">
          <div className="w-10 h-10 bg-white rounded-full mb-2"></div>
          <div className="w-14 h-6 bg-white rounded-full"></div>
        </div>
      </div>
    </div>

    {/* RIGHT – FORM */}
    <div>
      <h2 className="text-3xl font-semibold mb-3 text-black">
        Have a Query?
      </h2>
      <p className="text-black/70 mb-8">
        Share your requirements and our team will get back to you shortly.
      </p>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full placeholder-gray-400 text-black border border-black/20 px-4 py-3 bg-transparent focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full placeholder-gray-400 text-black border border-black/20 px-4 py-3 bg-transparent focus:outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full placeholder-gray-400 text-black border border-black/20 px-4 py-3 bg-transparent focus:outline-none"
        />

        <textarea
          placeholder="Your Query"
          rows="4"
          className="w-full placeholder-gray-400 text-black border border-black/20 px-4 py-3 bg-transparent focus:outline-none"
        />

        <button
          type="submit"
          className="bg-black text-white px-8 py-3 mt-2 hover:bg-black/90 transition"
        >
          Submit Query
        </button>
      </form>
    </div>

  </div>
</section>

    <footer className="w-full bg-black text-white">
      {/* TOP FOOTER */}
      <div
        className="max-w-7xl mx-auto px-6 py-16 md:py-20
                   grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
      >
        {/* LEFT NAVIGATION */}
        <nav
          aria-label="Footer Navigation"
          className="font-serif space-y-4 text-left
                     text-3xl sm:text-4xl md:text-5xl leading-tight"
        >
          <a href="/" className="block hover:opacity-70">HOME</a>
          <a href="/foundation" className="block hover:opacity-70">The Foundation</a>
          <a href="/studio" className="block hover:opacity-70">The Studio</a>
          <a href="/art-and-craft" className="block hover:opacity-70">Art and Craft</a>
          <a href="/find-us" className="block hover:opacity-70">Find Us</a>
        </nav>

        {/* CENTER EMPTY SPACE — DESKTOP ONLY */}
        <div className="hidden md:block" />

        {/* RIGHT CONTACT INFO */}
        <address
          className="not-italic flex flex-col
             text-left text-lg sm:text-2xl"
        >
          {/* TEXT ABOVE */}
          <div className="space-y-5">
            <p className="leading-snug">
              S-56/20, DLF Phase-III<br />
              Gurgaon, India-122002
            </p>

            <div className="space-y-1">
              <p className="opacity-70">Email Address</p>
              <a
                href="mailto:admin@zynna.in"
                className="hover:underline block"
              >
                <span>admin@zynna.in</span>
              </a>
            </div>
          </div>

          {/* PHONE — CLOSE & NATURAL GAP */}
          <a
            href="tel:+918800361361"
            className="flex items-center gap-3 mt-4 hover:underline"
            aria-label="Call Zynna"
          >
            <FaPhoneAlt className="text-xl" />
            <span>8800361361</span>
          </a>
        </address>

      </div>

      {/* BOTTOM BAR — WHITE BG, BLACK TEXT */}
      <div className="bg-white border-t border-black/20">
        <div
          className="max-w-7xl mx-auto px-6 py-6
                     flex flex-col md:flex-row
                     items-center justify-between gap-6 text-black"
        >
          <p className="text-base opacity-80">
            zynna.in © 2025
          </p>

          <div className="flex gap-6 text-3xl" aria-label="Social media links">
            <a href="#" aria-label="Instagram" className="hover:opacity-60"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-60"><FaFacebookF /></a>
            <a href="#" aria-label="WhatsApp" className="hover:opacity-60"><FaWhatsapp /></a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-60"><FaLinkedinIn /></a>
            <a href="#" aria-label="X" className="hover:opacity-60"><FaXTwitter /></a>
          </div>
        </div>
      </div>
      
    </footer>
    </>
  );
};

export default Footer;
