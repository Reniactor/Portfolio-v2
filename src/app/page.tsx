import NavBar from "./components/header/navBar";
import AboutMe from "./components/sections/aboutme/aboutMe";
import Footer from "./components/footer/footer";
import Projects from "./components/sections/projects/projects";
import Skills from "./components/sections/skills/skills";

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
