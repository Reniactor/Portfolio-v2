import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import type { Project } from "../projectIndex";
import { roboto } from "@/utils/fontIndex";
import Tag from "./Tag";

const ProjectCard = ({
  image,
  briefDescription,
  title,
  stack,
  target,
  linkToDemo,
  linkToRepo,
}: Project) => {
  return (
    <article className="min-h-[450px] w-fit max-w-md rounded-md bg-[#0f0f0f] text-left shadow-lg">
      <figure className="row-span-2 w-full">
        <Image
          src={image}
          alt={`${title} preview`}
          className="h-60 rounded-t-md object-cover object-center"
          height={240}
          width={448}
          layout="responsive"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <section
        aria-label="Project information"
        className="flex h-full flex-col gap-1 p-6 pb-0 sm:gap-4"
      >
        <header>
          <h2
            aria-label="Project title"
            className="text-2xl font-bold text-color30"
          >
            {title}
          </h2>
          <h3
            aria-label={`Brief description of ${title}`}
            className={`${roboto.className} text-base font-light text-[#bfbfbf]`}
          >
            {briefDescription}
          </h3>
        </header>

        <footer className="flex flex-col justify-around space-y-4">
          <section
            aria-labelledby="repository-and-demo-links"
            className="flex w-full justify-between"
          >
            {linkToRepo ? (
              <Link
                href={linkToRepo}
                target="_blank"
                className="h-6 w-6 text-color30"
                aria-label={`Link to ${title} repo`}
              >
                <BiCodeAlt className="h-full w-full duration-300 hover:text-color10" />
              </Link>
            ) : (
              <Link
                href={""}
                className="pointer-events-none h-6 w-6"
                aria-label={`No repo link available for ${title}`}
              >
                <BiCodeAlt className="h-full w-full text-color30/45" />
              </Link>
            )}
            {linkToDemo ? (
              <Link
                href={linkToDemo}
                target={target ? target : "_blank"}
                className="h-6 w-6 text-color30"
                aria-label={`Link to ${title} demo`}
              >
                <AiOutlineEye className="h-full w-full duration-300 hover:text-color10" />
              </Link>
            ) : (
              <Link
                href={""}
                className="pointer-events-none h-6 w-6"
                aria-label={`No demo link available for ${title}`}
              >
                <AiOutlineEye className="h-full w-full text-color30/45" />
              </Link>
            )}
          </section>
          <section
            aria-labelledby="tech-stack-tags"
            className="flex h-full flex-col"
          >
            <h2 className="sr-only">
              Tech stack tags. Technologies used to build {title}
            </h2>
            <ul
              aria-label={`${title} tech tags`}
              className="flex flex-wrap gap-1"
            >
              {stack?.map((technology, index) => {
                return <Tag key={index} techName={technology} />;
              })}
            </ul>
          </section>
        </footer>
      </section>
    </article>
  );
};
export default ProjectCard;
