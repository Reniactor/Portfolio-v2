import NavBar from "./components/header/navBar";
import AboutMe from "./components/sections/aboutme/aboutMe";
import ContactMe from "./components/footer/contactMe";
import Projects from "./components/sections/projects/projects";

export default function HomePage() {
  return (
    <main className="container">
      <NavBar />
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  );
}
