import type { Url } from "next/dist/shared/lib/router/router";
import type { StaticImageData } from "next/image";
import digitalShieldImage from "public/digitalshield.jpg";
import flockTravels from "public/flocktravels.jpg";
import shouldWeDineThatToday from "public/shouldwedinethattoday.jpg";
export interface Project {
  image: StaticImageData;
  title: string;
  briefDescription: string;
  stack?: string[];
  linkToDemo?: Url;
  linkToRepo?: Url;
}

export type Projects = Project[];

export const projects: Projects = [
  {
    image: digitalShieldImage,
    title: "Digital Shield",
    briefDescription: "Crypto Lockdown DApp",
    stack: ["Next.js", "Firebase", "Tailwindcss", "Ethers.js", "Solidity"],
    linkToDemo: "https://digital-shield.vercel.app",
  },
  {
    image: flockTravels,
    title: "Flock Travels",
    briefDescription: "Mock travel website",
    stack: ["Next.js", "Tailwindcss", "Material UI", "Typescript"],
    linkToDemo: "https://flock-travels.vercel.app",
    linkToRepo: "https://github.com/Reniactor/flock-travels",
  },
  {
    image: shouldWeDineThatToday,
    title: "Should we dine that today?",
    briefDescription: "Simple roulette app",
    stack: ["Next.js", "Tailwindcss"],
    linkToDemo: "https://should-we-dine-that-today.vercel.app",
    linkToRepo: "https://github.com/Reniactor/should-we-dine-that-today",
  },
];
