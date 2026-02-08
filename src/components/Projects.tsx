
import  { useEffect, useState } from "react";
import Project1 from "../assets/Project 1.png";
import Project2 from "../assets/Project 2.png";


import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

 const projects = [ { id: 1, 
  title: "Kanban Board", 
  description: "A drag-and-drop Kanban board built with React, TypeScript, and @dnd-kit. Features memoization, reusable helpers, and performance optimizations.", 
  image: Project1, 
  technologies: ["React", "TypeScript", "Tailwind CSS", "@dnd-kit"], 
  github: "https://github.com/zaman980/Kanban-Board", 
  demo: "https://kanban-board-react-git-main-zamans-projects-8f5502cc.vercel.app/", 
  category: "Frontend / Productivity", 
  featured: true, }, 
    {
      id: 2,
      title: "Todo App",
      description:
        "A feature-rich task management application with CRUD operations, local persistence, and a modern interface. Built for performance and scalability using Next.js.",
      image: Project2,
      technologies: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/zaman980/Todo-App", // Replace with your actual GitHub link
      demo: "https://todoapp-plum-sigma.vercel.app/",   // Replace with your live demo link
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image with overlay links */}
              <div className="relative overflow-hidden">
                <img
                
                 src={project.image}
                    alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5 text-gray-800" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5 text-gray-800" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-slate-800 text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;