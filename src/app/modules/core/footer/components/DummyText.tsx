import { nunitoSans, roboto } from "@/utils/fontIndex";
import RandomLoadingText from "./RandomLoadingText";
import { useEffect, useState } from "react";

const DummyTextSection = () => {
  const dummySectionStructure = {
    id: "dummy-text-section",
    h1: "Dummy text",
    h2: "To give a little bit more depth to this section :). (Also, a Quotes API is a must-have, right?)",
  };

  interface DummyTextData {
    id: string;
    text: string;
    source: string;
    language: string;
    permalink: string;
  }

  const [dummyTextDataFetched, setDummyTextDataFetched] = useState<
    string | null
  >(null);
  const [isDummyTextDataFetched, setIsDummyTextDataFetched] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random",
            {
              next: { revalidate: 1 },
            },
          );
          const data: DummyTextData = (await res.json()) as DummyTextData;
          if (res.ok) {
            setDummyTextDataFetched(data.text);
            setIsDummyTextDataFetched(true);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData()
        .then(() => {
          const i = 0;
          i + 1;
        })
        .catch((err) => {
          const i = 0;
          i + 1;
        });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id={dummySectionStructure.id}
      aria-labelledby={`${dummySectionStructure.id}-section`}
      className={`${nunitoSans.className} container hidden max-w-lg flex-col gap-8 px-4 pt-14 font-bold lg:flex`}
    >
      <header className="flex flex-col gap-2 2xl:px-4">
        <h1
          aria-labelledby={`${dummySectionStructure.id}-title`}
          className={`text-4xl tracking-tighter sm:text-6xl`}
        >
          {dummySectionStructure.h1}
        </h1>
        <h2 className="max-w-[36ch] text-lg font-thin text-[#bfbfbf] sm:text-xl">
          {dummySectionStructure.h2}
        </h2>
      </header>
      <div
        className={`${roboto.className} flex flex-col text-lg font-medium 2xl:px-4`}
      >
        <span className={`flex gap-1 text-lg`}>
          {isDummyTextDataFetched && (
            <div className="flex flex-col gap-4">
              <span>&ldquo; {dummyTextDataFetched} &rdquo;</span>{" "}
              <h3 className="text-xs font-bold">
                -Some really deep philosopher i swear.
              </h3>
            </div>
          )}
          {!isDummyTextDataFetched && <RandomLoadingText />}
        </span>
      </div>
    </section>
  );
};
export default DummyTextSection;
