"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import logo from "public/logo.png";
import {
  Playfair_Display,
  Open_Sans,
  Roboto_Serif,
  Roboto,
} from "next/font/google";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import SideBar from "./sideBar";

const headerFont = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-robotoSerif",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const accentFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

const routes = [
  {
    name: "About me",
    route: "#about-me",
  },
  {
    name: "Skills",
    route: "#skills",
  },
  {
    name: "Projects",
    route: "#projects",
  },
  {
    name: "Contact me",
    route: "#contact-me",
  },
];

const NavBar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const sideMenu = useRef<HTMLUListElement>(null);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-between px-2 backdrop-blur-sm md:px-4">
      <Image
        src={logo}
        alt="Arquímedes Logo"
        className="h-full w-auto"
        draggable="false"
        loading="lazy"
      />
      <div className="hidden w-80 justify-between md:flex">
        {routes.slice(1).map(({ name, route }) => {
          return (
            <div className="w-fit">
              <Link
                href={route}
                key={name}
                className={`${roboto.className} hover: text-lg font-medium uppercase duration-200 hover:text-color10/90`}
              >
                {name}
              </Link>
              <div className="w-1/2 border-b-2 border-color10"></div>
            </div>
          );
        })}
      </div>
      <div className="md:hidden">
        <button className="relative z-50 h-6 w-6" onClick={handleClick}>
          <HiOutlineMenuAlt3
            className={`${!isToggled ? "" : "hidden"} h-full w-full duration-500 visited:text-color10 hover:text-color10 focus:text-color10`}
          />
          <HiOutlineX
            className={`${!isToggled ? "hidden" : ""} h-full w-full duration-500 visited:text-color10 hover:text-color10 focus:text-color10`}
          />
        </button>
        <SideBar
          visibility={isToggled}
          routes={routes}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
};

export default NavBar;
