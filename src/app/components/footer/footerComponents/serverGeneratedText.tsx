import React from "react";
import RandomLoadingText from "./randomLoadingText";

const possibleLoadingTexts = [
  "Asking Chat-GPT for a quote...",
  "Not loading...",
  "Tickling the Servers for Answers...",
  "Convincing the Hamsters to Run Faster...",
  "Summoning digital elves to fetch a witty quote...",
];

export const getRandomLoadingText = () => {
  const randomIndex = Math.floor(Math.random() * possibleLoadingTexts.length);
  return possibleLoadingTexts[randomIndex];
};

const ServerGeneratedText = ({ loadingText }: { loadingText: string }) => {
  return <RandomLoadingText loadingText={loadingText} />;
};

export default ServerGeneratedText;
