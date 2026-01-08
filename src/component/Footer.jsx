import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Projects", href: "/projects" },
    { label: "Studio", href: "/studio" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "Pinterest", href: "https://www.pinterest.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Are.na", href: "https://www.are.na/" },
    { label: "Client Inquiries", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="px-6 md:px-16 pb-10">
        <div className="grid grid-cols-12 gap-10 items-start">

          {/* LEFT NAV */}
          <div className="col-span-12 md:col-span-3">
            <nav className="space-y-1 text-center md:text-left">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    block
                    text-[28px]
                    sm:text-[32px]
                    md:text-[44px]
                    leading-[1.05]
                    font-semibold
                    text-white/75
                    hover:text-white
                    transition
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* MIDDLE TEXT */}
          <div className="col-span-12 md:col-span-5 md:col-start-5">
            <p className="
              max-w-[560px]
              text-[16px]
              sm:text-[18px]
              md:text-[20px]
              leading-snug
              text-white/90
              text-center
              md:text-left
            ">
              Blending traditional craftsmanship with modern aesthetics to create
              unique window dressings. We redefine elegance with each design,
              integrating luxury with functionality.
            </p>
          </div>

          {/* RIGHT CONTACT */}
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <div className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              leading-snug
              text-white/90
              text-center
              md:text-right
            ">
              <p>2nd Floor, 348 D,</p>
              <p>Mehrauli-Gurgaon Rd,</p>
              <p>Sultanpur, New Delhi,</p>
              <p>Delhi 110030</p>
            </div>

            <div className="mt-8 md:mt-10 space-y-4">
              <div className="flex items-center justify-center md:justify-end gap-4">
                <Phone className="h-6 w-6 text-white/85" />
                <a
                  href="tel:+917303660071"
                  className="text-[18px] sm:text-[20px] md:text-[22px] text-white/90 hover:text-white transition"
                >
                  +91 73036 60071
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-4">
                <Mail className="h-6 w-6 text-white/85" />
                <a
                  href="mailto:contact@windowpassions.com"
                  className="text-[18px] sm:text-[20px] md:text-[22px] text-white/90 hover:text-white transition"
                >
                  contact@windowpassions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10" />

        {/* BOTTOM BAR */}
        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          md:items-center
          justify-between
          gap-6
          pt-8
        ">
          <div className="text-white/60 text-[14px] sm:text-[15px] md:text-[16px] text-center md:text-left">
            Window Passions © 2025
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-white/85 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
