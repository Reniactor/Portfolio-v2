export type technology = {
  type: string;
  language: string;
  description: string;
  status: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
};

const technologies: technology[] = [
  {
    type: "language",
    language: "JavaScript",
    description:
      "A high-level, versatile programming language commonly used for web development.",
    status: "Active",
    owner: "ECMA International",
    createdAt: new Date("1995-12-04"),
    updatedAt: new Date(),
  },
  {
    type: "language",
    language: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    status: "Active",
    owner: "Microsoft",
    createdAt: new Date("2012-10-01"),
    updatedAt: new Date(),
  },
  {
    type: "language",
    language: "Solidity",
    description:
      "A high-level programming language for writing smart contracts",
    status: "Active",
    owner: "Solidity Labs",
    createdAt: new Date("2014-08-07"),
    updatedAt: new Date("2024-05-21"),
  },
  {
    type: "language",
    language: "HTML",
    description:
      "Hypertext Markup Language used for creating web pages and web applications",
    status: "Active",
    owner: "WHATWG",
    createdAt: new Date("2008-01-22"),
    updatedAt: new Date("2008-01-22"),
  },
  {
    type: "language",
    language: "CSS",
    description:
      "Cascading Style Sheets used for styling web pages and web applications",
    status: "Active",
    owner: "W3C",
    createdAt: new Date("1996-12-17"),
    updatedAt: new Date("2020-12-07"),
  },
  {
    type: "library",
    language: "React.js",
    description: "A JavaScript library used to build user interfaces",
    status: "Active",
    owner: "Facebook",
    createdAt: new Date("2013-05-29"),
    updatedAt: new Date("2024-04-26"),
  },
  {
    type: "library",
    language: "Tailwind CSS",
    description:
      "A utility-first CSS framework to build custom designs without writing CSS",
    status: "Active",
    owner: "Tailwind Labs",
    createdAt: new Date("2017-11-01"),
    updatedAt: new Date("2024-06-05"),
  },
  {
    type: "library",
    language: "Puppeteer",
    description: "A Node.js library to control headless Chrome or Chromium",
    status: "Active",
    owner: "Google",
    createdAt: new Date("2017-08-24"),
    updatedAt: new Date("2024-05-24"),
  },
  {
    type: "framework",
    language: "Next.js",
    description:
      "A React framework to build server-side rendered and static web applications",
    status: "Active",
    owner: "Vercel",
    createdAt: new Date("2016-11-04"),
    updatedAt: new Date("2024-06-08"),
  },
  {
    type: "cloud",
    language: "Supabase",
    description:
      "An open-source Firebase alternative with PostgreSQL database, authentication, and storage",
    status: "Active",
    owner: "Supabase",
    createdAt: new Date("2020-01-01"),
    updatedAt: new Date(),
  },
  {
    type: "cloud",
    language: "Firebase",
    description:
      "A platform developed by Google for building mobile and web applications",
    status: "Active",
    owner: "Google",
    createdAt: new Date("2012-01-01"),
    updatedAt: new Date(),
  },
  {
    type: "database",
    language: "MySQL",
    description: "An open-source relational database management system",
    status: "Active",
    owner: "Oracle",
    createdAt: new Date("1995-05-23"),
    updatedAt: new Date("2024-04-10"),
  },
  {
    type: "database",
    language: "PostgreSQL",
    description: "An open-source object-relational database management system",
    status: "Active",
    owner: "OS Community",
    createdAt: new Date("1996-07-08"),
    updatedAt: new Date("2024-05-09"),
  },
  {
    type: "runtime",
    language: "Node.js",
    description:
      "A JavaScript runtime environment built on Chrome's V8 JavaScript engine",
    status: "Active",
    owner: "OpenJS Foundation",
    createdAt: new Date("2009-05-27"),
    updatedAt: new Date("2024-05-15"),
  },
  {
    type: "framework",
    language: "Express.js",
    description: "A minimalist web framework for Node.js",
    status: "Active",
    owner: "StrongLoop",
    createdAt: new Date("2010-05-22"),
    updatedAt: new Date("2024-03-25"),
  },
  {
    type: "framework",
    language: "Thirdweb",
    description: "A platform for developing decentralized web applications",
    status: "Active",
    owner: "Thirdweb",
    createdAt: new Date("2022-08-29"),
    updatedAt: new Date("2024-06-04"),
  },
];

export { technologies };
