"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-7xl h-[600px] md:h-[700px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                Kartik Kumar
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-2">
                B.Tech AI-DS Student
              </p>
              <p className="text-lg text-neutral-400 mb-6">
                GGSIPU EDC | 2024-2028
              </p>
              <p className="text-neutral-300 max-w-lg leading-relaxed">
                Passionate about web and app development. Building innovative solutions
                with React, Node.js, and Flutter. Exploring the intersection of
                Artificial Intelligence and Data Science.
              </p>
            </motion.div>
          </div>

          {/* Right content - Spline Scene */}
          <div className="flex-1 relative min-h-[300px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}

