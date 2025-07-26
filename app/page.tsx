import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
