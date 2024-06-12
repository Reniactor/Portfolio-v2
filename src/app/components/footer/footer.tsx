"use client";
import { useEffect, useState } from "react";
import { lobster, nunitoSans, roboto } from "@/utils/fontIndex";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin, SiMaildotru, SiWhatsapp } from "react-icons/si";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import type { NextResponse } from "next/server";
import { env } from "@/env";
import RandomLoadingText from "./footerComponents/randomLoadingText";
import { getRandomLoadingText } from "@/utils/getRandomLoadingText";
import ServerGeneratedText from "./footerComponents/serverGeneratedText";

const emailJsServiceId = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJsTemplateId = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailJsUserId = env.NEXT_PUBLIC_EMAILJS_USER_ID;

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

const dummySectionStructure = {
  id: "dummytext-section",
  h1: "Dummy text",
  h2: "To give a little bit more depth to this section :). (Also, a Quotes API is a must-have, right?)",
};

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface DummyTextData {
  id: string;
  text: string;
  source: string;
  language: string;
  permalink: string;
}

export async function getServerSideProps() {
  const loadingText = getRandomLoadingText();
  return {
    props: {
      initialLoadingText: loadingText,
    },
  };
}

export default function Footer() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [dataFetched, setDataFetched] = useState<string | null>(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const possibleLoadingTexts = [
    "Asking Chat-GPT for a quote...",
    "Not loading...",
    "Tickling the Servers for Answers...",
    "Convincing the Hamsters to Run Faster...",
    "Summoning digital elves to fetch a witty quote...",
  ];

  const getRandomLoadingText = () => {
    const randomIndex = Math.floor(Math.random() * possibleLoadingTexts.length);
    return possibleLoadingTexts[randomIndex];
  };
  const [isLoadingTextSet, setIsLoadingTextSet] = useState(false);
  const [loadingText, setLoadingText] = useState<string>();

  useEffect(() => {
    setLoadingText(getRandomLoadingText);
    setIsLoadingTextSet(true);
  }, [isLoadingTextSet]);

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
            setDataFetched(data.text);
            setIsDataFetched(true);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJsServiceId,
        emailJsTemplateId,
        e.target as HTMLFormElement,
        emailJsUserId,
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Message sent successfully!");
      })
      .catch((error: NextResponse) => {
        alert("Failed to send the message, please try again.");
      });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer
      id="contact-me"
      className="mt-20 flex min-h-96 w-full flex-col items-center space-y-6 border-t-4 border-color60 bg-color60 p-6 text-color30 lg:rounded-xl lg:border-0 lg:shadow-2xl 2xl:p-8"
    >
      <div className="flex w-full max-w-7xl justify-center lg:justify-between">
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
              {isDataFetched && (
                <div className="flex flex-col gap-4">
                  <span>&ldquo; {dataFetched} &rdquo;</span>{" "}
                  <h4 className="text-xs font-bold">
                    -Some really deep philosopher i swear.
                  </h4>
                </div>
              )}
              {!isDataFetched && loadingText && (
                <RandomLoadingText loadingText={loadingText} />
              )}
              {!isDataFetched && !loadingText && <h2>...</h2>}
            </span>
          </div>
        </section>
        <form
          onSubmit={handleSubmit}
          className={`${roboto.className} mt-8 w-full max-w-md rounded-lg bg-[#0f0f0f] p-6 shadow-md`}
        >
          <h2
            className={`${nunitoSans.className} text-center text-2xl font-extrabold text-color30`}
          >
            Contact me
          </h2>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-color30"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-color60shade bg-color60 p-2 text-color30 outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-color30"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-color60shade bg-color60 p-2 text-color30 outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-color30"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="border-color60shader w-full rounded bg-color60 p-2 text-color30 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-color30 px-4 py-2 font-bold text-color60 transition-colors duration-300 hover:bg-[#B8B8B8]"
          >
            Send
          </button>
        </form>
      </div>
      <div
        className={`${roboto.className} flex w-full flex-wrap items-center gap-4 min-[510px]:flex-row-reverse min-[510px]:justify-end`}
      >
        <span className="w-fit text-sm">
          <span className="">&copy;</span> {new Date().getFullYear()} Arquímedes
          Vásquez, all rights reserved.
        </span>
        <ul className="flex gap-4">
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
      </div>
    </footer>
  );
}
