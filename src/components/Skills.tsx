import { useEffect, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const Skills = [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 80 },
    { name: "Javascript", level: 50 },
    { name: "React", level: 50 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          Skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          });
        }
      },
      {
        threshold: 0.3,
      }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      year: "2017-2022",
      title: "Software Engineering",
      institution: "University of Management and Technology",
      description: "",
    },
  ];
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Education */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-green-400 text-4xl font-bold">Education</p>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={`${edu.year}-${edu.title}`}
                    className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                    <div className="text-gray-300">{edu.year}</div>
                    <h3 className="text-white text-xl font-semibold">
                      {edu.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Expert
              </p>
              <p className="text-4xl font-black text-white mb-8">My Skills</p>
            </div>
            <div className="space-y-6">
              {Skills.map((skill, index) => (
                <div
                  key={index}
                  className="space-y-2 transition-all duration-1000"
                  style={{ transitionDelay: `${index * 150}` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                      {skill.name}
                    </span>
                    <span className="text-green-400 font-semifold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1500 ease-out relative"
                      style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20"></div>
                    </div>
                  </div>
                </div>
              ))}
              {/* You can continue right side here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
