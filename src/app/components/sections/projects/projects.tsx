import { nunitoSans } from "@/utils/fontIndex";
import ProjectCard from "./projectsComponents/projectCard";
import { projects } from "./projectIndex";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-section"
      className={`${nunitoSans.className} container mt-60 flex min-h-screen flex-col gap-8 px-4 pt-36 font-bold`}
    >
      <header className="flex flex-col gap-2 2xl:px-4">
        <h1
          aria-labelledby="projects-title"
          className={` text-4xl tracking-tighter sm:text-6xl`}
        >
          Projects
        </h1>
        <h2 className="text-lg font-thin text-[#bfbfbf] sm:text-xl">
          A curated collection of my most recent projects. Some may include
          links to the repository, while others are actual products without
          public access.
        </h2>
      </header>
      <div
        aria-labelledby="projects-cards"
        className={`${nunitoSans.className} grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              stack={project.stack}
              target={project?.target}
              briefDescription={project.briefDescription}
              linkToDemo={project.linkToDemo}
              linkToRepo={project.linkToRepo}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
