import { nunitoSans } from "@/utils/fontIndex";
import ProjectCard from "./projectsComponents/projectCard";
import { projects } from "./projectIndex";
import SectionComponent from "../sectionComponent";

//Defining the basic information for this section.
//ID defining the Ariallabeledby dynamic title,
//H1 and H2 define the headers for this section
const projectsInformationScaffolding = {
  id: "projects",
  h1: "Projects",
  h2: "A curated collection of my most recent projects. Some may include links to the repository, while others are actual products without public access.",
};

/*
Create a bot that:
Accepts any given game and -
Constantly checks if we're in top 1. If not, check who is.
Try and update / beat that price. 
If price is too low, avoid going lower.



*/



const Projects = () => {
  return (
    <SectionComponent
      id={projectsInformationScaffolding.id}
      h1={projectsInformationScaffolding.h1}
      h2={projectsInformationScaffolding.h2}
    >
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
    </SectionComponent>
  );
};
export default Projects;

{
  /* </section> */
}
