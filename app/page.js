import Hero  from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/Contact";
export default function Page() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}