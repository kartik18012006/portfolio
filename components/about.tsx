"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database } from "lucide-react";

export default function About() {
  const services = [
    { name: "Web Development", icon: Code },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Custom Solutions", icon: Database },
    { name: "Full-Stack", icon: Code },
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
            About Us
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
              <Code className="text-neutral-400 mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-semibold text-neutral-50 mb-2">
                  Our Expertise
                </h3>
                <p className="text-neutral-300 mb-1">
                  <span className="font-semibold">Custom Development</span>
                </p>
                <p className="text-neutral-400">
                  I build tailored solutions for businesses of all sizes
                </p>
                <p className="text-neutral-400">From startups to enterprises</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-neutral-50 mb-4">
                Our Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-neutral-800 bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <Icon className="text-neutral-400" size={20} />
                      <span className="text-neutral-300">{service.name}</span>
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
              WHO I AM
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
            Hi, I’m Kartik Kumar — an App & Web Developer and AI & Data Science student. I create modern web applications, explore data-driven solutions, and enjoy building products that combine great user experiences with practical functionality.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              
            </p>
            <p className="text-neutral-300 leading-relaxed">
              
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

