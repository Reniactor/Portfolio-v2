import { Lobster, Nunito_Sans, Roboto } from "next/font/google";
//Lobster font declaration
const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

//Nunito Sans font declaration with all available weights
//And display swap to avoid font override bug
const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
  subsets: ["latin"],
});

//Roboto font declaration
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export { lobster, roboto, nunitoSans };
