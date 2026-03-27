"use client";
import { useState } from "react";
import SectionComponent from "../SectionComponent";
import SQLConsole from "./components/SQLConsole";
import SQLtable from "./components/SQLTable";
import { VscTerminal, VscTable } from "react-icons/vsc";

const skillsInformationScaffolding = {
  id: "skills",
  h1: "Skills",
  h2: "All of the technologies I've used and kept using throughout my professional career. Familiar with PostgreSQL yourself? Toggle the SQL Mode and run a query!",
};

const Skills = () => {
  const [isConsoleMode, setIsConsoleMode] = useState(false);

  return (
    <SectionComponent
      id={skillsInformationScaffolding.id}
      h1={skillsInformationScaffolding.h1}
      h2={skillsInformationScaffolding.h2}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 self-end">
          <button
            onClick={() => setIsConsoleMode(false)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              !isConsoleMode
                ? "bg-color10 text-color60"
                : "bg-[#2f2f2f] text-color30 hover:bg-[#3f3f3f]"
            }`}
            aria-label="Switch to table view"
          >
            <VscTable className="h-4 w-4" />
            Table
          </button>
          <button
            onClick={() => setIsConsoleMode(true)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isConsoleMode
                ? "bg-color10 text-color60"
                : "bg-[#2f2f2f] text-color30 hover:bg-[#3f3f3f]"
            }`}
            aria-label="Switch to SQL console"
          >
            <VscTerminal className="h-4 w-4" />
            Console
          </button>
        </div>
        {isConsoleMode ? <SQLConsole /> : <SQLtable />}
      </div>
    </SectionComponent>
  );
};
export default Skills;
