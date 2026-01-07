import React from "react";

const projects = [
  {
    title: "Green Park",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Vasant Vihar",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white min-h-screen px-16 pt-28 pb-24">
      {/* Heading */}
      <div className="max-w-xl mb-24">
        <h1 className="text-[92px] font-light leading-none mb-6">
          Projects
        </h1>
      
      </div>
        <p className="text-gray-300 text-lg mb-15">
          Explore some of our bespoke projects where we've worked with our
          craftsmanship to bring out the most aesthetic window dressings.
        </p>


      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-28">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Title */}
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
