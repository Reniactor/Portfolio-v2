import {
  Anton,
  Arimo,
  Inter,
  Lobster,
  Nunito_Sans,
  Open_Sans,
  Roboto,
} from "next/font/google";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const nunito_sans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className={`${nunito_sans.className} container mt-52 flex justify-center px-4 text-center`}
    >
      <div className="flex h-fit max-w-lg flex-col gap-y-8 lg:max-w-3xl">
        <p className={`flex h-fit flex-col`} aria-label="Author introduction">
          <span className="text-3xl font-medium min-[480px]:text-4xl lg:text-5xl xl:text-7xl">
            Hello! I&apos;m{" "}
          </span>
          <span
            className={`${lobster.className} text-4xl font-bold text-color10 min-[480px]:text-5xl lg:text-6xl xl:text-8xl`}
          >
            Arquímedes V.
          </span>{" "}
          <span className="text-2xl font-light min-[480px]:text-3xl lg:text-4xl xl:text-6xl">
            a self taught web developer.
          </span>
        </p>
        <div
          className="flex justify-between"
          aria-label="Social media links - Github - Linkedin"
        >
          <a
            href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin className="h-auto w-10 text-color10 duration-200 hover:text-color30 min-[480px]:w-12 lg:w-14 xl:w-16" />
          </a>
          <a
            href="https://github.com/Reniactor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Profile"
          >
            <BsGithub className="h-auto w-10 text-color10 duration-200 hover:text-color30   min-[480px]:w-12 lg:w-14 xl:w-16" />
          </a>
        </div>
        <p
          className={`max-w-[30ch] text-lg font-light min-[480px]:text-2xl lg:max-w-prose xl:text-4xl`}
        >
          I strive to deliver an excellent product, it’s a top priority for me
          to provide a balance between a robust{" "}
          <span className="text-color10">UX</span> and an appealing{" "}
          <span className="text-color10">UI</span>.
        </p>
      </div>
    </section>
  );
}
