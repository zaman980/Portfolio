import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white py-12 border-t border-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:text-start text-center justify-between items-center">
          <div className="text-2xl font-bold mb-2 group cursor-pointer">
            <span className="text-green-500 group-hover:text-green-400 transition-all duration-300">
              ZAMAN
            </span>{" "}
            <span className="text-white group-hover:text-green-400 transition-all duration-300">
              NADEEM
            </span>
            <span className="text-green group-hover:text-green-400 transition-all duration-300">
              .
            </span>
            <p className="text-gray-400 hover:text-gray-300 transition-all duration-300">
              Front End Developer
            </p>
          </div>

          <div className="flex items-center gap-8 mt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made With</span>
              <Heart className="w-4 h-4 text-green-500 fill-current" />
              <span>by Zaman Nadeem</span>
            </div>
          </div>

          <button
            className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:rotate-12 group mt-6"
            aria-label="Scroll to Top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="sr-only">Scroll to Top</span>
            <ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
