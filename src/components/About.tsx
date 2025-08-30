import { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    const element = document.getElementById("about"); // Replace with your actual ID
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* 🎨 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* 🧩 Content */}
      <div className="container mx-auto px-6 py-4">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 🖼️ Left Image */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative group w-full max-w-md mx-auto">
                <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transform group-hover:scale-105 transition-all duration-300">
                  <img
                    src="src/assets/51.jpg"
                    alt="About"
                    className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Floating Decorations */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>
              </div>
            </div>

            {/* 📄 Right Text Content */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-4">
                <p className="text-green-400 font-semibold text-lg">About Us</p>
                <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">
                  Why hire me for your <br />
                  <span>next project?</span>
                </h2>
                <p className="text-green-400 font-semibold delay-200">
                  Front End Developer
                </p>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p
                  className={`text-lg transition-all duration-100 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  I’m a Frontend Developer with 1 year of hands-on experience
                  specializing in React.js. I build responsive, user-friendly
                  web applications using modern technologies like JavaScript
                  (ES6+), HTML5, CSS3, Tailwind CSS, and React frameworks. My
                  experience spans academic projects and internships, where I
                  translated UI/UX designs into clean, maintainable code and
                  integrated APIs for seamless user experiences. I'm proficient
                  in state management using Redux Toolkit and React Context API,
                  and I’m passionate about writing performant, scalable, and
                  cross-browser compatible code.
                </p>
                <p
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  I'm excited to bring my skills and enthusiasm to teams focused
                  on delivering high-quality web solutions.
                </p>
              </div>
              <div
                className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Name
                  </p>
                  <p className="text-gray-300">Zaman Nadeem</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Location
                  </p>
                  <p className="text-gray-300">Lahore,Pakistan</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Birthday
                  </p>
                  <p className="text-gray-300">06 July,1997</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Email
                  </p>
                  <p className="text-gray-300">zamannadeem990@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-[1100ms]">
                <button
                  className="bg-green-600 text-white px-8 py-3 rounded-lg 
               hover:bg-green-700 transition-all duration-300 
               font-medium shadow-lg hover:shadow-xl hover:scale-105"
                >
                  DOWNLOAD
                </button>

                <button
                  className="border-2 border-slate-600 text-white px-8 py-3 rounded-lg 
               hover:border-green-600 hover:text-green-400 
               transition-all duration-300 font-medium hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
