import { AboutMe } from "@/components/AboutMe";
import { HeroSection } from "@/components/HeroSection";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
