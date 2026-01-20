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
      {/* QUERY SECTION */}
      <section className="w-full bg-[#fafaf9] py-20 border-t border-[#e5e2de]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT – VISUAL */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 bg-[#1f1f1f] rounded-xl flex flex-col justify-center px-8">

              {/* CLIP */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-10 bg-[#1f1f1f] rounded-t-xl"></div>

              {/* CHECKLIST */}
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 border border-white/70 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white"></div>
                    </div>
                    <div className="h-px w-32 bg-white/70"></div>
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
            <h2 className="animate-bounce text-3xl font-semibold mb-3 text-[#832a32]">
              Have a Query?
            </h2>
            <p className="animate-pulse text-[#1f1f1f]/70 mb-10">
              Share Your Requirements and Our Team Will Connect With You.
            </p>

            <form className="animate-pulse space-y-6">
              {["Full Name", "Email Address", "Phone Number"].map((ph, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={ph}
                  className="w-full placeholder-[#9b9b9b]
                             text-[#1f1f1f]
                             border border-[#e5e2de]
                             px-4 py-3 bg-transparent
                             focus:outline-none focus:border-[#832a32]"
                />
              ))}

              <textarea
                placeholder="Your Query"
                rows="4"
                className="w-full placeholder-[#9b9b9b]
                           text-[#1f1f1f]
                           border border-[#e5e2de]
                           px-4 py-3 bg-transparent
                           focus:outline-none focus:border-[#832a32]"
              />

              <button
                type="submit"
                className="animate-bounce bg-[#832a32] text-white
                           px-8 py-3 mt-2
                           hover:bg-[#6f232a] transition"
              >
                Submit Query
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#fafaf9] text-[#1f1f1f] border-t border-[#e5e2de]">

        {/* TOP FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-20
                        grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* LEFT NAV */}
          <nav
            aria-label="Footer Navigation"
            className="font-serif space-y-4 text-left
                       text-xl sm:text-xl md:text-2xl leading-tight"
          >
            {[
              ["HOME", "/"],
              ["The Foundation", "/foundation"],
              ["The Studio", "/studio"],
              ["Art and Craft", "/art-and-craft"],
              ["Find Us", "/find-us"],
            ].map(([label, link]) => (
              <a key={label} href={link} className="block hover:text-[#832a32] transition">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block" />

          {/* CONTACT */}
          <address className="not-italic flex flex-col text-left text-lg sm:text-xl">
            <div className="space-y-5">
              <p className="leading-snug text-[#1f1f1f]/80">
                S-56/20, DLF Phase-III<br />
                Gurgaon, India-122002
              </p>

              <div>
                <p className="text-[#9b9b9b]">Email</p>
                <a
                  href="mailto:admin@zynna.in"
                  className="hover:text-[#832a32] transition"
                >
                  admin@zynna.in
                </a>
              </div>
            </div>

            <a
              href="tel:+918800361361"
              className="flex items-center gap-3 mt-4 hover:text-[#832a32] transition"
            >
              <FaPhoneAlt className="text-xl" />
              <span>8800361361</span>
            </a>
          </address>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#e5e2de]">
          <div className="max-w-7xl mx-auto px-6 py-6
                          flex flex-col md:flex-row
                          items-center justify-between gap-6">
            <p className="text-base text-[#9b9b9b]">
              Zynna.in © 2025
            </p>

            <div className="flex gap-6 text-2xl text-[#1f1f1f]">
              {[FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaXTwitter].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="hover:text-[#832a32] cursor-pointer transition"
                  />
                )
              )}
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
