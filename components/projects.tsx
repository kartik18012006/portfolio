"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe } from "lucide-react";
import Image from "next/image";

const webProjects = [
  {
    name: "E-Learning Platform",
    description:
      "A comprehensive educational platform designed to provide quality learning resources and courses. Built with modern web technologies to deliver an engaging learning experience for students and educators.",
    url: "https://thegurujiclasses.vercel.app/",
    technologies: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Growth Tracking App",
    description:
      "A web application focused on personal development and growth tracking. Helps users set goals, track progress, and achieve their personal and professional milestones with intuitive analytics.",
    url: "https://growth-buddy-iota.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

const appImages = [
  { name: "dating1", src: "/assets/dating1.png" },
  { name: "dating2", src: "/assets/dating2.png" },
  { name: "community", src: "/assets/community.png" },
  { name: "fintech", src: "/assets/fintech.png" },
  { name: "homeserivce", src: "/assets/homeserivce.png" },
];

function DisplayCard({ project, index }: { project: typeof webProjects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative h-full p-6 rounded-xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/40 via-neutral-900/20 to-black/40 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/80 hover:bg-gradient-to-b hover:from-neutral-900/60 hover:via-neutral-900/30 hover:to-black/50 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-800/0 via-neutral-700/0 to-neutral-800/0 group-hover:from-neutral-800/20 group-hover:via-neutral-700/10 group-hover:to-neutral-800/20 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-neutral-50 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <div className="p-1.5 rounded-md bg-neutral-800/50 border border-neutral-700/50 group-hover:bg-neutral-700/50 group-hover:border-neutral-600/50 transition-all">
                <ExternalLink size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
              </div>
            </div>

            <p className="text-sm text-neutral-400 mb-5 leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-800/60 text-neutral-300/90 border border-neutral-700/40 backdrop-blur-sm group-hover:bg-neutral-800/80 group-hover:border-neutral-600/60 group-hover:text-neutral-200 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
              <span>View Project</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function ImageCard({ image, index }: { image: { name: string; src: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full"
    >
      <div className="relative rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all duration-300 hover:border-neutral-700/80 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 overflow-hidden">
        <div className="relative w-full flex items-center justify-center bg-transparent">
          <Image
            src={image.src}
            alt={image.name}
            width={1200}
            height={800}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={100}
            priority={index < 3}
          />
        </div>
      </div>
    </motion.div>
  );
}

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
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto"></div>
        </motion.div>

        {/* Web Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
              <Globe className="text-neutral-300" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">
              Web Development
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {webProjects.map((project, index) => (
              <DisplayCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* App Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
              <Smartphone className="text-neutral-300" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">
              App Development
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appImages.map((image, index) => (
              <ImageCard key={image.name} image={image} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



