import { nunitoSans } from "@/utils/fontIndex";

//Defining a reusable component to simplify the basic styling
//And information inside each section
const SectionComponent = ({
  children,
  id,
  h1,
  h2,
}: {
  children: React.ReactNode;
  id: string;
  h1: string;
  h2: string;
}) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-section`}
      className={`${nunitoSans.className} container mb-20 mt-60 flex min-h-screen flex-col gap-8 px-4 pt-36 font-bold`}
    >
      <header className="flex flex-col gap-2 2xl:px-4">
        <h1
          aria-labelledby={`${id}-title`}
          className={`text-4xl tracking-tighter sm:text-6xl`}
        >
          {h1}
        </h1>
        <h2 className="text-lg font-thin text-[#bfbfbf] sm:text-xl">{h2}</h2>
      </header>
      {children}
    </section>
  );
};
export default SectionComponent;
