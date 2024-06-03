"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import logo from "public/logo.png";
import { Playfair_Display, Open_Sans, Roboto_Serif } from "next/font/google";
import { CgMenuGridR } from "react-icons/cg";

const headerFont = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-robotoSerif",
});

const accentFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

const NavBar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(true);
  const sideMenu = useRef<HTMLUListElement>(null);
  const handleClick = () => {
    setIsToggled(!isToggled);

    const shorthand = sideMenu.current?.classList;

    if (isToggled) {
      shorthand?.remove("false");
      shorthand?.remove("translate-x-[400px]");
      shorthand?.add("true");
    } else {
      shorthand?.remove("true");
      shorthand?.add("translate-x-[400px]");
      shorthand?.add("false");
    }
  };

  return (
    <nav className="flex h-screen w-full flex-col items-center justify-center min-[805px]:fixed min-[805px]:z-50 min-[805px]:h-[14%] min-[805px]:flex-row min-[805px]:justify-between min-[805px]:bg-color60">
      <Image
        className="order-2 h-auto w-3/4 min-[805px]:order-first min-[805px]:w-32"
        src={logo}
        alt="logo"
        draggable="false"
        loading="eager"
      />
      <button
        className={`fixed left-0 top-0 ${
          isToggled ? "hidden" : ""
        } h-full w-1/2 transform cursor-default bg-color60 bg-opacity-30 transition-transform duration-500 min-[805px]:hidden`}
        onClick={handleClick}
      ></button>
      <button
        onClick={handleClick}
        className={`fixed right-[10px] top-[10px] z-50 duration-200`}
        aria-label="menu-button"
      >
        <CgMenuGridR
          className={`fixed right-2 top-2 h-auto w-8 min-[805px]:hidden ${
            !isToggled ? "text-color10" : "text-color30"
          } duration-700 hover:text-color10`}
        />
      </button>
      <ul
        ref={sideMenu}
        className={`${headerFont.className} 
          false 
          fixed
          right-0 
          top-0 
          z-40 
          flex
          h-screen 
          w-1/2 
          translate-x-[400px]
          flex-col
          items-center
          justify-center
          gap-y-32
          bg-color60shade
          bg-opacity-100
          font-mono
          text-3xl
          lowercase
          transition-all
          max-[400px]:text-2xl
          max-[300px]:text-xl
          max-[255px]:text-lg
          min-[805px]:relative
          min-[805px]:order-2
          min-[805px]:h-full
          min-[805px]:w-2/3
          min-[805px]:translate-x-0
          min-[805px]:flex-row
          min-[805px]:justify-between 
          min-[805px]:bg-transparent
          min-[805px]:text-2xl
          min-[1286px]:w-1/3
          `}
      >
        <li className="duration-300 hover:text-color10 min-[805px]:w-1/3 min-[805px]:text-center">
          <a href="#aboutMe" onClick={handleClick}>
            About me
          </a>
        </li>
        <li className="duration-300 hover:text-color10 min-[805px]:w-1/3 min-[805px]:text-center">
          <a href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li className="duration-300 hover:text-color10 min-[805px]:w-1/3 min-[805px]:text-center">
          <a href="#contactMe" onClick={handleClick}>
            contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
