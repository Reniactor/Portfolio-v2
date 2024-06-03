import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="mb-12 min-[805px]:pt-60">
      <div className="grid grid-cols-1 grid-rows-3 gap-y-5">
        <h1
          className={`flex flex-col text-center font-RobotoSerif text-[3.6rem] font-medium leading-snug max-[414px]:text-[3rem] max-[354px]:text-[2rem]`}
        >
          <span>
            Hello<span className="font-OpenSans">!</span> I&apos;m{" "}
          </span>
          <span className="text-7xl font-semibold text-color10 max-[414px]:text-6xl max-[354px]:text-[2.6rem]">
            Arquímedes V.
          </span>{" "}
          a self taught web developer.
        </h1>
        <div className="grid w-full grid-cols-2 grid-rows-1 items-center justify-items-center">
          <a
            href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/"
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="LinkedIn-Personal-Website"
          >
            <BsLinkedin className="h-28 w-auto text-color10 duration-300 hover:text-color30 max-[414px]:h-16 max-[300px]:h-12" />
          </a>
          <a
            href="https://github.com/Reniactor"
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Github-Profile"
          >
            <BsGithub className="h-28 w-auto text-color10 duration-300 hover:text-color30 max-[414px]:h-16 max-[300px]:h-12" />
          </a>
        </div>
        <p
          className={`px-2 text-center font-RobotoSerif text-3xl font-light max-[414px]:text-2xl max-[300px]:text-xl min-[805px]:w-[786px] min-[805px]:justify-self-center`}
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
