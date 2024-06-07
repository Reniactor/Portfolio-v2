import { nunitoSans, roboto } from "@/utils/fontIndex";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

const socials = [
  {
    icon: <BsGithub />,
    link: "https://github.com/Reniactor",
  },
  {
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/arquimedes-vasquez-668964238/",
  },
  {
    icon: <SiWhatsapp />,
    link: "https://wa.me/+573014393346",
  },
];

export default function ContactMe() {
  return (
    <footer id="contactMe" className="min-h-96 space-y-2 px-4 py-4 2xl:px-8">
      <h1 className={`${roboto.className} text-4xl font-bold tracking-tight`}>
        Contact <span className="text-5xl text-color10">me</span>
      </h1>
      <ul className="flex gap-4">
        {socials.map(({ icon, link }, index) => {
          return (
            <li key={index}>
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
