import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Hero() {
  const [isVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    SetIsVisible(true);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-2 pl-6 md:pl-12">
            <p
              className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Get Ready to Start Work
            </p>

            <h1
              className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              I'm <span className="text-green-400">Developer</span>
              <br />
              <span className="text-white">ZAMAN NADEEM</span>
            </h1>
            <p
              className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
             Self-motivated front-end developer with 1 year of experience building responsive,high-performance web apps using React.js.Quick learner,passionate about clean code,UI/UX,and modern developement practices.
            </p>

            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Buttons */}

              {/* Learn More */}
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">
                LEARN MORE
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Play Video */}
              <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
                <Play className="w-5 h-5" />
                PLAY VIDEO
              </button>
            </div>
            {/* Social Icons */}
            <div
              className={`flex gap-4 pt-6 transition-all duration-1000 delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <FiGithub />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <MdOutlineEmail />
              </a>
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative group">
                  <img
                    src="src/assets/51.jpg"
                    alt="Portrait of Alexander Smith"
                    className="w-full rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Content */}
    </section>
  );
}

export default Hero;
