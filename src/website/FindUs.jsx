import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-2xl text-gray-400 mb-4">
            We&apos;re Happy to Help
          </p>

          <h1 className="text-7xl font-light mb-6">
            Like What You See
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-md mb-10">
            Lorem ipsum dolor sit amet consectetur. Orci sollicitudin viverra
            mauris ac sed lectus morbi egestas. Urna massa ante in bibendum
            bibendum urna turpis eu. Eu ac mus at nunc arcu eget sagittis.
          </p>

          {/* ADDRESS */}
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">📍</span>
            <p className="text-gray-300 leading-relaxed">
              2nd Floor, 348 D, Mehrauli-Gurgaon Rd,
              <br />
              Sultanpur, New Delhi, Delhi 110030
            </p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">📞</span>
            <p className="text-gray-300">+91 73036 60071</p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <span className="text-5xl">✉️</span>
            <p className="text-gray-300">contact@windowpassions.com</p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-[620px] rounded-md overflow-hidden">
          <iframe
            title="Window Passions Location"
            src="https://www.google.com/maps?q=Berlin&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;
