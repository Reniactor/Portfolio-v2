import NavBar from "./modules/core/header/NavBar";
import AboutMe from "./modules/core/sections/aboutme/AboutMe";
import Projects from "./modules/core/sections/projects/Projects";
import Skills from "./modules/core/sections/skills/Skills";
import LatestPosts from "./modules/core/sections/latestposts/LatestPosts";

export default async function HomePage() {
  return (
    <main className="container">
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <LatestPosts />
    </main>
  );
}
