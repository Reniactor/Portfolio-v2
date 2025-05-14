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

  return loadingText ? <h2>{loadingText}</h2> : <h2>...</h2>;
};

export default RandomLoadingText;
