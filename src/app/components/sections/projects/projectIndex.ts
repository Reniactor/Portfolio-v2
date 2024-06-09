import type { Url } from "next/dist/shared/lib/router/router";
import type { StaticImageData } from "next/image";
import digitalShieldImage from "public/digitalshield.jpg";
import flockTravels from "public/flocktravels.jpg";
import shouldWeDineThatToday from "public/shouldwedinethattoday.jpg";
import portfolio from "public/portfolio.jpg";

// defining the interface for each Project

export interface Project {
  image: StaticImageData;
  title: string;
  briefDescription: string;
  stack: string[];
  target?: string;
  linkToDemo?: Url;
  linkToRepo?: Url;
}

export type Projects = Project[];

// This array of objects is used to map over and create each project card
// in the Projects section of the portfolio.

export const projects: Projects = [
  {
    image: portfolio,
    title: "Arquimedes Vasquez",
    briefDescription: "My portfolio",
    stack: ["Next.js", "Tailwindcss", "Prisma", "Supabase", "Typescript"],
    target: "_self",
    linkToDemo: "#about-me",
    linkToRepo: "https://github.com/Reniactor/Portfolio-v2",
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
  {
    image: digitalShieldImage,
    title: "Digital Shield",
    briefDescription: "Crypto Lockdown DApp",
    stack: ["Next.js", "Firebase", "Tailwindcss", "Ethers.js", "Solidity"],
    linkToDemo: "https://digital-shield.vercel.app",
  },
];
