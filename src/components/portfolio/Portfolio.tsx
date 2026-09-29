import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";

export function Portfolio() {
  return (
    <div className="pb-8">
      <Nav />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
