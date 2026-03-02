import React from "react";

const FindUs = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-2xl text-gray-400 mb-4">
            Find Us
          </p>

          <h1 className="text-5xl font-light mb-6">
            Zynna Experience & Design Centre
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-md mb-10">
            Zynna’s custom curtain collections are also available through select
            premium drapery showrooms and trusted design partners across key
            markets. Our growing presence ensures that Zynna’s craftsmanship,
            fabrics, and bespoke expertise remain accessible to clients seeking
            refined, made-to-measure window solutions.
          </p>

          {/* ADDRESS */}
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">📍</span>
            <p className="text-gray-300 leading-relaxed">
              S-56/20, DLF Phase-III,<br /> Gurgaon – 122002, India
            </p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">📞</span>
            <p className="text-gray-300">088003 61361</p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <span className="text-5xl">✉️</span>
            <p className="text-gray-300">info@zynna.in</p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-[500px] md:h-[620px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112050.38755036592!2d77.05395200000001!3d28.6425088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d1ecd4521ec9f%3A0x6c87dc1abbb530c6!2sZynna%2C%20S-56%2C%2020%2C%20S%20Block%2C%20DLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122010!3m2!1d28.4870202!2d77.1033142!5e0!3m2!1sen!2sin!4v1772449110677!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default FindUs;