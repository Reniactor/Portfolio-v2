"use client";
import { roboto } from "@/utils/fontIndex";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin, SiMaildotru, SiWhatsapp } from "react-icons/si";
import FormComponent from "./components/FormComponent";
import DummyTextSection from "./components/DummyText";

const iconsClasses =
  "h-full w-full hover:text-color10 transition-colors duration-300";

const socials = [
  {
    anchorAriaLabelledBy: "github-icon-link",
    icon: <BsGithub className={iconsClasses} />,
    link: "https://github.com/Reniactor",
  },
  {
    anchorAriaLabelledBy: "linkedin-icon-link",
    icon: <SiLinkedin className={iconsClasses} />,
    link: "https://www.linkedin.com/in/arquimedes-vasquez-668964238/",
  },
  {
    anchorAriaLabelledBy: "whatsapp-icon-link",
    icon: <SiWhatsapp className={iconsClasses} />,
    link: "https://wa.me/+573014393346",
  },
  {
    anchorAriaLabelledBy: "mail-icon-link",
    icon: <SiMaildotru className={iconsClasses} />,
    link: "mailto:arquimedes_elio16@hotmail.com",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact-me"
      className="mt-20 flex min-h-96 w-full flex-col items-center space-y-6 border-t-4 border-color60 bg-color60 p-6 text-color30 lg:rounded-xl lg:border-0 lg:shadow-2xl 2xl:p-8"
    >
      <div
        aria-labelledby="dummy-text-and-form-component-container"
        className="flex w-full max-w-7xl justify-center lg:justify-between"
      >
        <DummyTextSection />
        <FormComponent />
      </div>
      <div
        className={`${roboto.className} flex w-full flex-wrap items-center gap-4 min-[510px]:flex-row-reverse min-[510px]:justify-end`}
      >
        <span className="w-fit text-sm">
          <span className="">&copy;</span> {new Date().getFullYear()} Arquímedes
          Vásquez, all rights reserved.
        </span>
        <ul className="flex gap-4">
          {socials.map(({ anchorAriaLabelledBy, icon, link }, index) => (
            <li key={index} className="h-6 w-6">
              <a
                aria-labelledby={`link-label-${index}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id={`link-label-${index}`} className="sr-only">
                  {anchorAriaLabelledBy}
                </span>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
