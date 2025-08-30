import React, { useEffect, useState } from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi"; // Feather Icons

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      id: 1,
      title: "Dashboard",
      description:
        "A modern dashboard application built with React and Tailwind CSS, allowing dynamic data visualization and user management.",
      image: Project1,
      technologies: ["React", "Tailwind CSS", "Chart.js"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "EMS",
      description:
        "An Employee Management System that enables HR to track employee performance, attendance, and internal communication.",
      image: Project2,
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 3,
      title: "Ecommerce Shopping Cart using React Redux",
      description:
        "A fully functional shopping cart with user authentication, product management, and Redux for state management.",
      image: Project3,
      technologies: ["React", "Redux", "Firebase"],
      category: "Full Stack",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <p className="text-green-400 font-semibold text-lg mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise
            </p>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              {projects.map((project, index) => {
                return (
                  <div
                    className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105  ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                    key={project.id}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-70 object-cover group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {/* GitHub Button */}
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                          <FiGithub className="w-4 h-4 text-gray-700" />
                        </button>

                        {/* External Link Button */}
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                          <FiExternalLink className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      <div className="p-6">
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                          {project.title}
                        </h4>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description.substring(0, 100)}...
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div
              className={`text-center transition-all duration-1000 delay-1000 mt-5  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="View all projects"
              >
                View All Projects
              </button>
            </div>
          </div>

          {/* Add your projects here */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
