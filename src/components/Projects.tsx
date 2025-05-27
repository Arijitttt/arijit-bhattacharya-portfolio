
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import img1 from '../images/1st_project_img.jpg'
import img2 from '../images/img_2.png'
import img3 from '../images/img_3.png'


export const Projects = () => {
  const projects = [
    {
      title: "EcoNav",
      description: "a web-based navigation system utilizing Google Maps API to provide environmentally friendly routes, estimate CO2 emissions based on vehicle engine characteristics, and promote sustainable travel habits through an intuitive user interface.",
      image: img1,
      technologies: ["Javascript", "Python", "Flask", "HTML", "CSS", "Google Maps API"],
      github: "https://github.com/Arijitttt/EcoNav",
      live: "#"
    },
    {
      title: "MediaDock",
      description: "This repository contains the backend of a full-stack video-sharing platform built using Node.js and MongoDB. It powers features such as video uploads, user authentication, likes/dislikes, comments, playlists, subscriptions, and tweet-like short messages.",
      image: img3,
      technologies: ["NodeJS", "ExpressJS"," cookie-parser", "MongoDB",  "Mongoose ODM"],
      github: "https://github.com/Arijitttt/MediaDock",
      live: "#"
    },
    {
      title: "Thermalytics",
      description: "Developed Thermo-Insights, a web-based tool for preliminary health diagnostics that analyzes thermal images, generates detailed PDF reports, converts greyscale images to heatmaps, and enhances accuracy using generative AI, including integration with the Gemini API.",
      image: img2,
      technologies: ["React", "Python", "Flask", "genAI"],
      github: "https://github.com/Arijitttt/thermal_insight",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
