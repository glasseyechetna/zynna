import React, { useState } from "react";

const LeadForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] bg-white text-black px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-all"
      >
        Enquire Now
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative text-black">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ×
            </button>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold mb-4">
              Enquire Now
            </h2>

            {/* FORM */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />

              <textarea
                placeholder="Your Requirement"
                className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default LeadForm;
