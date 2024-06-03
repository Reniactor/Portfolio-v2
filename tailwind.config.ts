import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        "PlayfairDisplay": ["Playfair Display", "Serif"],
        "OpenSans": ["Open Sans", "Sans-Serif"],
        "RobotoSerif": ["Roboto Serif", "Serif"]
      },
      colors: {
        color60: "#1e1e1e",
        color60shade: '#292929',
        color30: "#f2f2f2",
        color10shade: "#FFD485",
        color10: "#ffb01f",
        testcolor1: "#942911",
        testcolor2: "#904E55"
      }
    },
  },
  plugins: [],
} satisfies Config;
