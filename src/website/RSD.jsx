import React, { useState } from "react";

const RSD = () => {
  const [aboutMore, setAboutMore] = useState(false);
  const [stylingMore, setStylingMore] = useState(false);
  const [journeyMore, setJourneyMore] = useState(false);

  return (
    <>
      {/* ABOUT RSD */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="animate-bounce text-4xl font-serif mb-6">RSD</h2>

          <div className="p-8 md:p-12 mb-6">
            <p className="animate-pulse text-sm text-gray-700 mb-2 leading-relaxed">
              RSD is Zynna’s execution-focused division that brings cosmetic
              styling, detailing, and on-site supervision together—ensuring every
              space is finished with precision, clarity, and a premium final
              outcome.
            </p>

            {aboutMore && (
              <div className="animate-pulse text-sm text-gray-700 space-y-4 leading-relaxed">
                <p>
                  RSD supports the final stages of a project where the difference
                  between “done” and “exceptional” is defined by detailing and
                  execution quality.
                </p>

                <p>
                  We align on-site work with the approved direction, ensuring
                  that materials, finishes, proportions, and visual consistency
                  match the intended design.
                </p>

                <p>
                  With structured supervision and clear checkpoints, RSD helps
                  reduce errors, avoid rework, and deliver a refined outcome
                  without daily client stress.
                </p>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setAboutMore(!aboutMore)}
                className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase"
              >
                {aboutMore ? "Show Less" : "Explore More"}
              </button>
            </div>
          </div>

          {/* COSMETIC STYLING AND DETAILING */}
          <div className="mb-12">
            <h2 className="animate-bounce text-4xl font-serif mb-2">
              Cosmetic Styling and Detailing
            </h2>

            <p className="animate-pulse text-sm text-gray-700 leading-relaxed mb-2">
              Cosmetic styling and detailing focus on the final look, finish, and
              refinement of a space—so every element feels intentional, aligned,
              and professionally completed.
            </p>

            {stylingMore && (
              <div className="animate-pulse text-sm text-gray-700 space-y-4 leading-relaxed">
                <p>
                  This stage includes coordination for concepts, room visuals,
                  and drawings, ensuring the on-site execution follows the agreed
                  design direction accurately.
                </p>

                <p>
                  We review detailing across edges, junctions, finishes, and
                  alignments—where premium spaces are truly defined.
                </p>

                <p>
                  The goal is a clean, cohesive finish that elevates the space
                  without inconsistencies or avoidable compromises.
                </p>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setStylingMore(!stylingMore)}
                className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase"
              >
                {stylingMore ? "Show Less" : "Explore More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS AND EXCLUSIONS */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="animate-bounce text-4xl font-serif mb-6">
            Inclusions and Exclusions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">
            <div>
              <h3 className="animate-bounce text-2xl font-serif mb-6">
                Inclusions
              </h3>
              <p className="animate-pulse text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                Cosmetic styling guidance, detailing checks, concepts, room
                visuals and drawings coordination, and on-site installation
                supervision to ensure the final outcome matches the intended
                design.
              </p>
            </div>

            <div>
              <h3 className="animate-bounce text-2xl font-serif mb-6">
                Exclusions
              </h3>
              <p className="animate-pulse text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                Structural work, civil construction, and material procurement
                unless explicitly defined within the project scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="animate-bounce text-4xl font-serif mb-6">
            The Journey
          </h2>

          <div className="animate-pulse text-sm text-gray-700 space-y-6 leading-relaxed max-w-4xl mx-auto">
            {/* QUOTATION */}
            <div>
              <h3 className="font-medium text-lg mb-3">Quotation</h3>
              <p>
                Following the consult, we provide a detailed quotation outlining
                the costs and specifications of your chosen designs. This transparent
                pricing ensures there are no surprises, just clarity and fairness
                in every quote.
              </p>
            </div>

            {/* MEASUREMENT */}
            <div>
              <h3 className="font-medium text-lg mb-3">Measurement</h3>
              <p>
                Precision is key, which is why our specialists meticulously measure
                your windows to guarantee a perfect fit. We consider every aspect
                of the window’s architecture to ensure the final product will be
                exactly as envisioned.
              </p>
            </div>

            {/* CONCEPTS & VISUALS */}
            <div>
              <h3 className="font-medium text-lg mb-3">
                Concepts, Room Visuals and Drawings
              </h3>
              <p>
                We align on styling direction through clear concepts, room visuals,
                and detailed drawings to ensure every execution detail follows the
                intended design vision with accuracy.
              </p>
            </div>

            {/* CONSTRUCTION */}
            <div>
              <h3 className="font-medium text-lg mb-3">Construction</h3>
              <p>
                During construction, we supervise detailing and execution to ensure
                materials, proportions, and finishes are implemented precisely as
                approved.
              </p>
            </div>

            {/* INSTALLATION SUPERVISION */}
            <div>
              <h3 className="font-medium text-lg mb-3">
                Installation Supervision
              </h3>
              <p>
                The final step in our process is the installation, handled by our
                professional team. They ensure your window treatments are installed
                seamlessly and function perfectly, transforming your space with
                elegance and style.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RSD;