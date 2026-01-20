import React from "react";

const projects = [
  {
    title: "Green Park, New Delhi",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Vasant Vihar, New Delhi",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-16 pt-28 pb-24">

      {/* HEADING */}
      <div className="max-w-2xl mb-20">
        <h1 className="animate-bounce text-[72px] md:text-[92px] font-light leading-none mb-8">
          Projects
        </h1>

        <p className="animate-pulse text-gray-300 text-lg leading-relaxed">
          Explore a selection of bespoke projects where Zynna has delivered
          refined curtain and window dressing solutions. Each project reflects
          our commitment to craftsmanship, design precision, and timeless
          aesthetics across residential and premium interior spaces.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-28">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer animate-pulse"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`Zynna Bespoke Window Dressing Project in ${project.title}`}
                className="w-full h-[360px] md:h-[420px] object-cover
                           transition-transform duration-700
                           group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <div className="mt-6 flex items-center gap-4">
              <h3 className="text-2xl font-light">
                {project.title}
              </h3>
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;
