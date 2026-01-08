import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Code2,
  Sparkles,
} from "lucide-react";

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

    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      title: "News Explorer Frontend",
      description:
        "A React application that allows users to search for news articles using the News API and save them to their personal account",
      tech: ["React", "React Router", "Vite", "News API", "CSS3"],
      github: "https://github.com/BarryRogerG/news-explorer-frontend",
      demo: "http://34.134.30.14",
    },
    {
      title: "Around the US",
      description:
        "A responsive website that showcases various locations around the United States with image galleries, user profiles, and interactive elements",
      tech: ["HTML5", "CSS3", "JavaScript", "Webpack"],
      github: "https://github.com/BarryRogerG/se_project_aroundtheus",
      demo: "http://34.134.30.14/aroundtheus/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <header
          className={`text-center mb-24 transition-all duration-1000 transform ${
            showHeader
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200">
              Open to opportunities
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              lineHeight: "1.6",
              paddingBottom: "0.5rem",
              paddingTop: "0.25rem",
            }}
          >
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse inline-block"
              style={{ paddingBottom: "0.5rem" }}
            >
              Barry Roger Goldberg
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Code2 className="w-5 h-5 text-purple-400" />
            <p className="text-2xl text-purple-200 font-light">
              Full Stack Developer
            </p>
            <Code2 className="w-5 h-5 text-purple-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate developer creating web applications with modern
            technologies. Focused on building performant, scalable, and
            beautiful user experiences.
          </p>
        </header>

        <section
          className={`mb-24 transition-all duration-1000 transform ${
            showProjects
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  idx === 2 ? "md:col-span-2 md:mx-auto md:max-w-2xl" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30"
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
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
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
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Connect With Me
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? Let's
              connect and create something amazing together.
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="mailto:bgold656@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/barryrogergoldberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/BarryRogerG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
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
