import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Mail, Linkedin, Code2 } from "lucide-react";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHeader, setShowHeader] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Staggered animations
    setTimeout(() => setShowHeader(true), 100);
    setTimeout(() => setShowProjects(true), 600);
    setTimeout(() => setShowContact(true), 1100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "WTWR (What to Wear?)",
      description:
        "Weather-based clothing recommendation app with real-time API integration",
      tech: ["React", "Node.js", "Weather API"],
      github: "https://github.com/BarryRogerG/se_project_react",
      demo: "https://bestbudwtwr.ignorelist.com",
    },
    {
      title: "News Explorer",
      description:
        "React application that allows users to search for news articles using the News API and save them to their personal account",
      tech: ["React", "React Router", "Vite", "News API"],
      github: "https://github.com/BarryRogerG/news-explorer-frontend",
      demo: "http://34.134.30.14",
    },
    {
      title: "SmartOps",
      description:
        "A comprehensive team-governance platform featuring Role-Based Access Control (RBAC) to oversee operational health, delegate task ownership, and resolve bottlenecks via a centralized Admin command center.",
      tech: ["React", "Node.js", "PostgreSQL", "RBAC", "Tailwind"],
      github: "[Insert your GitHub Link here]",
      demo: "https://smartops-frontend.onrender.com",
    },
    {
      title: "Around The US",
      description:
        "Responsive user-friendly website enabling users to add/delete images and change their profile info",
      tech: ["HTML5", "CSS3", "JavaScript", "Webpack"],
      github: "https://github.com/BarryRogerG/se_project_aroundtheus",
      demo: "https://se-project-aroundtheus-ebon.vercel.app",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 179, 8, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                1 + Math.random() * 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow:
                "0 0 10px rgba(234, 179, 8, 1), 0 0 20px rgba(234, 179, 8, 0.5)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes goldShine {
          0% { 
            background-position: -100% center;
          }
          100% { 
            background-position: 100% center;
          }
        }
        .gold-animated {
          color: #ffffff;
          background: linear-gradient(
            90deg,
            #e0e0e0 0%,
            #f5f5f5 25%,
            #ffd700 35%,
            #ffed4e 38%,
            #fff700 40%,
            #ffff00 41%,
            #fffacd 42%,
            #ffff00 43%,
            #fff700 44%,
            #ffed4e 45%,
            #fff700 46%,
            #ffff00 47%,
            #fffacd 48%,
            #ffff00 49%,
            #fff700 50%,
            #ffed4e 52%,
            #ffd700 55%,
            #f5f5f5 65%,
            #e0e0e0 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShine 6s linear infinite;
          display: inline-block;
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <header
          className={`text-center mb-24 transition-all duration-1000 transform overflow-visible ${
            showHeader
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 gold-animated leading-[1.15] pt-2 pb-4 overflow-visible">
            Barry Roger Goldberg
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Code2 className="w-5 h-5 text-yellow-400" />
            <p className="text-2xl text-yellow-100 font-light">
              Full Stack Developer
            </p>
            <Code2 className="w-5 h-5 text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate developer creating web applications with modern
            technologies. Focused on building performant, scalable, and
            beautiful user experiences.
          </p>
        </header>

        <section
          className={`mb-24 transition-all duration-1000 transform text-center overflow-visible ${
            showProjects
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 gold-animated inline-block pt-2 pb-3">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/40 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-600/0 group-hover:from-yellow-500/10 group-hover:to-yellow-600/10 rounded-2xl transition-all duration-300" />

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-3 gold-animated">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-yellow-500/20 text-yellow-200 rounded-full border border-yellow-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 border border-yellow-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-yellow-500"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`transition-all duration-1000 transform ${
            showContact
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-12 border border-yellow-500/40 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Connect With Me
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto pb-2">
              Interested in collaborating or have a project in mind? Let's
              connect and create something amazing together.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="mailto:bgold656@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 border border-yellow-500"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/barryrogergoldberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gray-800/50 rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-yellow-500"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/BarryRogerG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gray-800/50 rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-yellow-500"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Barry Roger Goldberg. Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
