import React from "react";
const projects = [
  {
    img: "/TerraTrails.png",
    alt: "Screenshot of TerraTrails travel website",
    link: "https://marionlilian.github.io/TerraTrails/index.html",
  },
  {
    img: "/FitMind screenshot.png",
    alt: "Screenshot of FitMind tele-counseling app",
    link: "https://marionlilian.github.io/FitMind_Hub/index.html",
  },
  {
    img: "/JobConnect screenshot.png",
    alt: "Screenshot of JobConnect job board app",
    link: "https://marionlilian.github.io/JobConnect/Index.html",
  },
  {
    img: "/Calorie counter.png",
    alt: "Screenshot of Calorie Counter tracking app",
    link: "https://marionlilian.github.io/Calorie_counter/Index.html",
  },
];


function Projects() {
  return (
    <div className="py-6 px-4" id="projects">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 bg-clip-text text-transparent text-center mb-6">
        My Latest Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:mx-4 md:mx-10 lg:mx-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-4 flex flex-col items-center cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105 border border-transparent hover:border-pink-500"
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-full h-64 object-contain mb-4"
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
