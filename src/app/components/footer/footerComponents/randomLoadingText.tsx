"use client";
import { lobster } from "@/utils/fontIndex";
import { useEffect, useState } from "react";

const RandomLoadingText = () => {
  const possibleLoadingTexts = [
    "Asking Chat-GPT for a quote...",
    "Not loading...",
    "Tickling the Servers for Answers...",
    "Convincing the Hamsters to Run Faster...",
    "Summoning digital elves to fetch a witty quote...",
  ];

  const returnPossibleLoadingText = () => {
    const randomIndex: number = Math.floor(
      Math.random() * possibleLoadingTexts.length,
    );
    return possibleLoadingTexts[randomIndex] as never;
  };
  const [possibleLoadingText, setPossibleLoadingText] = useState(
    possibleLoadingTexts[0],
  );
  useEffect(() => {
    setPossibleLoadingText(returnPossibleLoadingText());
  }, []);
  return (
    <div>
      <span className={`${lobster.className} text-lg`}>"</span>
      {possibleLoadingText}
      <span className={`${lobster.className} text-lg`}>"</span>
    </div>
  );
};
export default RandomLoadingText;
