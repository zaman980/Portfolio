import { Award } from "lucide-react";
import { useEffect, useState } from "react";

function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [timelineVisible, setTimelineVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (entry.target.classList.contains("timeline-item")) {
              setTimelineVisible(true);
            } else {
              const index = parseInt(target.dataset.index || "0");
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElement = document.querySelector(".timeline-item");
    const experienceItems = document.querySelectorAll(".experience-item");

    if (timelineElement) observer.observe(timelineElement);
    experienceItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
    };
  }, []);

  const experiences = [
     {
      company: "React js Developer",
      position: "ILI.DIGITAL",
      period: "08/2024 – Present",
      location: "Lahore",
      description:
        "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
      achievements: [
        "Engineered responsive internal dashboards using React,Tailwind CSS,Chakra UI and Ant Design,delivering a modern and consistent user experience.",
        "Boosted application performance through advanced rendering optimization and virtualization techniques.",
        "Implemented Tanstack Query for seamless server-state management,resulting in faster and more reliable data fetching.",
      ],
      skills: ["React", "Typescript", "Redux Toolkit", "Tanstack Query", "TailwindCSS"],
    },
   
   
  ];
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold text-lg mb-4">
            All Company
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto delay-300">
            My professional journey and the experiences that shaped my expertise
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`w-full bg-gradient-to-b from-green-500 via-green-400 to green-300 rounded-full transition-all duration-2000 ease-out`}
              ></div>
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item relative flex items-center mb-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } transition-all duration-1000 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                data-index={index}
                style={{
                  transitionDelay: `${index * 300 + 1200}ms`,
                  transform: visibleItems.includes(index)
                    ? "translateY(0)"
                    : index % 2 === 0
                    ? "translateX(-50px) translateY(20px)"
                    : "translateX(50px) translateY(20px)",
                }}
              >
                {/* Timeline Dot Lines */}
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${`visibleItems.in`}`}
                >
                  <div className="bg-green-500 rounded-full w-full h-full"></div>
                  <div className="bg-green-400 rounded-full w-full h-full"></div>
                </div>

                {/* Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${
                    visibleItems.includes(index) ? "scale-110" : "scale-0"
                  }`}
                ></div>
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 
              w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10
              ${visibleItems.includes(index) ? "scale-110" : "scale-0"}`}
                  style={{ transitionDelay: `${index * 300 + 1200}ms` }}
                >
                  <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20 group">
                    <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6 ease-in-out"></div>

                      <div>
                        {/* Company Name */}
                        <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                          {exp.company}
                        </h3>

                        {/* Experience Period */}
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <time>{exp.period}</time>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                        {exp.position}
                      </h4>
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                      {exp.description}
                    </div>

                    {/* Key Achievements Header */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-green-400 transition-all duration-300">
                        <Award className="w-4 h-4 text-green-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achv, achIndex) => {
                          return (
                            <li
                              key={achIndex}
                              className="text-gray-300 text-sm flex items-start gap-3 group-hover:text-white transition-all duration-300"
                              style={{
                                animationDelay: `${achIndex * 200 + 1500}ms`,
                              }}
                            >
                              {/* Green Dot */}
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse-dot" />
                              {/* Achievement Text */}
                              {achv}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {exp.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-green-400"
                            style={{
                              animationDelay: `${
                                index * 300 + skillIndex * 100 + 1800
                              }ms`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
