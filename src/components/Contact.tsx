import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { CiTwitter } from "react-icons/ci";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const socialIcons = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      link: "https://github.com/zaman980",
      name: "Github",
       
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/zaman-nadeem-4b22081a0/",
      name: "LinkedIn",
    },
    // {
    //   icon: <CiTwitter className="w-5 h-5" />,
    //   link: "https://twitter.com/yourusername",
    //   name: "Twitter",
    // },
  ];
  const contacts = [
    { icon: <Mail />, title: "Email", info: "zamannadeem990@gmail.com" },
    { icon: <Phone />, title: "Phone", info: "+92 3084016128" },
    { icon: <MapPin />, title: "Location", info: "Lahore,Pakistan" },
  ];
  return (
    <section
      id="contact"
      className="py-24 bg-slate-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 transition-all duration-1000">
          <p className="text-green-400 font-semibold text-lg mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let’s discuss how
            we can bring your ideas to life.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 transition-all duration-1000">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you!
            </p>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-green-400">{contact.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 transition-all duration-1000 delay-900">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialIcons.map(({ icon, link, name }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center
              hover:bg-green-600 hover:text-white transition-all duration-300
              group border border-slate-700 hover:border-green-500
              hover:scale-110 hover:rotate-6"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300`}>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name Field */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50"
                      placeholder="your name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Full Name
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="name"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50"
                      placeholder="email"
                      required
                    />
                  </div>

                  {/* You can add more fields here if needed */}
                </div>
                <div className="group mt-5">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white
               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500
               focus:border-transparent transition-all duration-300 hover:border-green-500/50
               resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-5 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700
                 transition-all duration-300 font-semibold flex items-center justify-center
                 gap-2 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                </button>
              </form>
            </div>
          </div>
          {/* Add additional content like a contact form or buttons here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
