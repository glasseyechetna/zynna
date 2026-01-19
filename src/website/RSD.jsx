import React, { useState } from "react";

const RSD = () => {
  const [aboutMore, setAboutMore] = useState(false);
  const [stylingMore, setStylingMore] = useState(false);
  const [journeyMore, setJourneyMore] = useState(false);

  return (
    <>
      {/* ABOUT RSD */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="animate-bounce text-4xl font-serif mb-6">
            About RSD
          </h2>

          <div className=" p-8 md:p-12 mb-16">
            <p className="animate-pulse text-sm text-gray-700 mb-8 leading-relaxed">
              RSD is Zynna’s specialised division focused on cosmetic styling,
              detailing, and execution supervision—created to ensure that design
              intent is delivered on site with precision and clarity.
            </p>

            {aboutMore && (
              <div className="animate-pulse text-sm text-gray-700 space-y-4 leading-relaxed">
                <p>
                  RSD acts as a bridge between design and execution. While
                  architects and designers conceptualise a space, RSD ensures
                  that every element is executed exactly as planned during the
                  final stages of construction and finishing.
                </p>

                <p>
                  Our role involves reviewing on-site work, coordinating with
                  contractors, and supervising finishes so that proportions,
                  alignments, and detailing remain consistent with approved
                  drawings and concepts.
                </p>

                <p>
                  RSD is especially valuable for clients who seek a refined,
                  high-quality outcome without the stress of daily site
                  involvement. By overseeing execution, we minimise errors,
                  reduce rework, and ensure smoother project completion.
                </p>

                <p>
                  From residential homes and luxury apartments to hospitality
                  and commercial spaces, RSD ensures that the final result feels
                  polished, cohesive, and thoughtfully finished.
                </p>
              </div>
            )}

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setAboutMore(!aboutMore)}
                className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase"
              >
                {aboutMore ? "Show Less" : "Explore More"}
              </button>
            </div>
          </div>

          {/* COSMETIC STYLING AND DETAILING */}
          <div className="mb-24">
            <h2 className="animate-bounce text-4xl font-serif mb-6">
              Cosmetic Styling and Detailing
            </h2>

            <p className="animate-pulse text-sm text-gray-700 leading-relaxed mb-8">
              Cosmetic styling and detailing focus on the final visual and
              functional quality of a space—where design truly comes to life.
            </p>

            {stylingMore && (
              <div className="animate-pulse text-sm text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Cosmetic styling involves reviewing materials, finishes,
                  colours, and proportions to ensure that the space feels
                  balanced and visually harmonious. This stage addresses how
                  different elements interact with one another.
                </p>

                <p>
                  Detailing supervision includes close inspection of edges,
                  junctions, fittings, surface finishes, and alignments. These
                  finer details significantly influence how premium and refined
                  a space ultimately feels.
                </p>

                <p>
                  RSD also supports final styling decisions, ensuring that
                  furniture placement, visual flow, and spatial balance enhance
                  the original design rather than distract from it.
                </p>

                <p>
                  The result is a space that feels complete, intentional, and
                  professionally finished—without visible inconsistencies or
                  compromises in quality.
                </p>
              </div>
            )}

            <div className="flex justify-center mt-10">
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
      <section className="w-full bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="animate-bounce text-4xl font-serif mb-16">
            Inclusions and Exclusions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center mb-32">

            <div>
              <h3 className="animate-bounce text-2xl font-serif mb-6">
                Inclusions
              </h3>
              <p className="animate-pulse text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                Design coordination, cosmetic styling guidance, detailing
                supervision, quality checks, and on-site execution review to
                ensure alignment with the approved design intent.
              </p>
            </div>

            <div>
              <h3 className="animate-bounce text-2xl font-serif mb-6">
                Exclusions
              </h3>
              <p className="animate-pulse text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                Structural modifications, civil construction work, and material
                procurement unless explicitly defined within the project scope.
              </p>
            </div>

          </div>

          {/* THE JOURNEY */}
          <div className="text-center">
            <h2 className="animate-bounce text-4xl font-serif mb-12">
              The Journey
            </h2>

            <p className="animate-pulse text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
              RSD follows a structured and transparent process designed to
              ensure clarity, accountability, and smooth execution from start
              to finish.
            </p>

            {journeyMore && (
              <div className="animate-pulse text-sm text-gray-700 space-y-4 leading-relaxed max-w-3xl mx-auto mb-10">
                <p>
                  The journey begins with a clear understanding of project
                  requirements and expectations, followed by a detailed
                  quotation outlining scope, timelines, and deliverables.
                </p>

                <p>
                  Accurate site measurements and evaluations help assess
                  feasibility and prevent execution challenges at later stages.
                </p>

                <p>
                  Throughout execution, RSD provides ongoing supervision to
                  ensure that detailing, finishes, and visual alignment remain
                  consistent with the approved design.
                </p>

                <p>
                  This structured approach results in smoother coordination,
                  reduced errors, and a final outcome that reflects quality,
                  precision, and design integrity.
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <button
                onClick={() => setJourneyMore(!journeyMore)}
                className="animate-bounce bg-black text-white text-xs px-6 py-3 tracking-widest uppercase"
              >
                {journeyMore ? "Show Less" : "Explore More"}
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default RSD;
