import { BsGithub } from "react-icons/bs";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function ContactMe() {
  return (
    <section
      id="contactMe"
      className="mb-14 flex h-fit w-full transform flex-col gap-y-4 transition-all duration-200"
    >
      <h1 className="mb-4  ml-10 w-full font-OpenSans text-5xl font-bold max-[414px]:ml-2 max-[414px]:text-3xl md:ml-24 lg:ml-60">
        Contact{" "}
        <span className="font-RobotoSerif text-[3.8rem] text-color10 max-[414px]:text-[2.5rem]">
          me
        </span>
      </h1>
      <ul
        className=" flex 
                            w-full 
                            justify-between 
                            font-RobotoSerif 
                            text-xl
                            max-[414px]:text-xs  
                            sm:text-2xl
                            md:w-3/4
                            md:justify-around  
                            md:text-3xl 
                            lg:justify-evenly"
      >
        <li>
          <a
            href="https://github.com/Reniactor"
            target="_blank"
            rel="noopener noreferrer"
            className="color flex items-center duration-200 hover:text-color10"
          >
            <BsGithub className="mr-1 text-color10" /> Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/"
            target="_blank"
            rel="noopener noreferrer"
            className="color flex items-center duration-200 hover:text-color10"
          >
            <SiLinkedin className="mr-1 text-color10" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+573015157686"
            target={`_blank`}
            className="color flex items-center duration-200 hover:text-color10"
          >
            <SiWhatsapp className="mr-1 text-color10" /> Whatsapp
          </a>
        </li>

        {/* <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Pending</a>
                    </li> */}
        {/* <li>
                    <a href="mailto:arquimedes_elio16@hotmail.com" className="flex items-center color hover:text-color10 duration-200"><BsMailbox className="mr-1 text-color10" /> Mail</a>
                    </li> */}
      </ul>
    </section>
  );
}
