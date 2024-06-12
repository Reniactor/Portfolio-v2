export const getRandomLoadingText = () => {
  const possibleLoadingTexts = [
    "Asking Chat-GPT for a quote...",
    "Not loading...",
    "Tickling the Servers for Answers...",
    "Convincing the Hamsters to Run Faster...",
    "Summoning digital elves to fetch a witty quote...",
  ];
  const randomIndex = Math.floor(Math.random() * possibleLoadingTexts.length);
  console.log(possibleLoadingTexts);
  return possibleLoadingTexts[randomIndex];
};
