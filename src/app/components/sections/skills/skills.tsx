import { nunitoSans, roboto } from "@/utils/fontIndex";
import SectionComponent from "../sectionComponent";
import SQLtable from "./skillscomponents/sqltable";

const languages = ["typescript", "javascript", "solidity"];

//Defining the basic information for this section.
//ID defining the Ariallabeledby dynamic title,
//H1 and H2 the headers for this section
const skillsInformationScaffolding = {
  id: "skills",
  h1: "Skills",
  h2: "All of the technologies i've used and kept using throughout my professional career.",
};

const Skills = () => {
  return (
    <SectionComponent
      id={skillsInformationScaffolding.id}
      h1={skillsInformationScaffolding.h1}
      h2={skillsInformationScaffolding.h2}
    >
      <SQLtable />
    </SectionComponent>
  );
};
export default Skills;
