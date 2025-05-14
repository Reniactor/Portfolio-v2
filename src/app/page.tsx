import NavBar from "./modules/core/header/NavBar";
import AboutMe from "./modules/core/sections/aboutme/AboutMe";
import Projects from "./modules/core/sections/projects/Projects";
import Skills from "./modules/core/sections/skills/Skills";

export default function HomePage() {
  return (
    <main className="container">
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
    </main>
  );
}
