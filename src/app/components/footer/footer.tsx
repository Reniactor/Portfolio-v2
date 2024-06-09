import { nunitoSans, roboto } from "@/utils/fontIndex";
import { BsGithub } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { SiLinkedin, SiMaildotru, SiWhatsapp } from "react-icons/si";

const iconsClasses =
  "h-full w-full hover:text-color10 transition-colors duration-300";

const socials = [
  {
    icon: <BsGithub className={iconsClasses} />,
    link: "https://github.com/Reniactor",
  },
  {
    icon: <SiLinkedin className={iconsClasses} />,
    link: "https://www.linkedin.com/in/arquimedes-vasquez-668964238/",
  },
  {
    icon: <SiWhatsapp className={iconsClasses} />,
    link: "https://wa.me/+573014393346",
  },
  {
    icon: <SiMaildotru className={iconsClasses} />,
    link: "mailto:arquimedes_elio16@hotmail.com",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact-me"
      className="mt-20 flex min-h-96 w-full items-end space-y-2 border-color60 p-6 lg:rounded-xl lg:border-[6px] lg:border-b-[6px] lg:border-l-[6px] lg:border-t-0 lg:shadow-2xl 2xl:p-8"
    >
      <ul className="flex gap-4">
        {/* TODO add a form component and a copyright with Arquímedes Vásquez */}
        {socials.map(({ icon, link }, index) => {
          return (
            <li key={index} className="h-6 w-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
