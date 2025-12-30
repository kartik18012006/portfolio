"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Smartphone, Database } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React", icon: Code },
    { name: "Node.js", icon: Code },
    { name: "Flutter", icon: Smartphone },
    { name: "AI & Data Science", icon: Database },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <GraduationCap className="text-neutral-400 mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-semibold text-neutral-50 mb-2">
                  Education
                </h3>
                <p className="text-neutral-300 mb-1">
                  <span className="font-semibold">B.Tech in AI-DS</span>
                </p>
                <p className="text-neutral-400">
                  Guru Gobind Singh Indraprastha University (GGSIPU)
                </p>
                <p className="text-neutral-400">EDC Campus | 2024-2028</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-neutral-50 mb-4">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-neutral-800 bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <Icon className="text-neutral-400" size={20} />
                      <span className="text-neutral-300">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neutral-50 mb-4">
              Who I Am
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              I&apos;m a dedicated student pursuing my passion for technology at GGSIPU,
              specializing in Artificial Intelligence and Data Science. My journey in
              development started with a curiosity to build things that make a difference.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              I specialize in creating modern web applications using React and Node.js,
              and developing cross-platform mobile apps with Flutter. My academic focus
              on AI-DS allows me to bring a unique perspective to problem-solving,
              combining data-driven insights with practical development skills.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
              open-source projects, or working on personal projects that challenge me
              to grow as a developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

