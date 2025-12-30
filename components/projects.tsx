"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "The Guruji Classes",
    description:
      "An educational platform designed to provide quality learning resources and courses. Built with modern web technologies to deliver an engaging learning experience.",
    url: "https://thegurujiclasses.vercel.app/",
    technologies: ["React", "Node.js"],
  },
  {
    name: "Growth Buddy",
    description:
      "A web application focused on personal development and growth tracking. Helps users set goals, track progress, and achieve their personal and professional milestones.",
    url: "https://growth-buddy-iota.vercel.app/",
    technologies: ["React", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full p-8 hover:border-neutral-700 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-neutral-50 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Visit Project</span>
                  <ExternalLink size={16} />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

