import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 px-4 text-center text-neutral-500 border-t border-neutral-800">
        <p>© 2024 Kartik Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}

