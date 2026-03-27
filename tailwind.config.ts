import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.tsx", "./src/content/**/*.mdx"],
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
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#f2f2f2",
            "--tw-prose-headings": "#f2f2f2",
            "--tw-prose-links": "#ffb01f",
            "--tw-prose-bold": "#f2f2f2",
            "--tw-prose-code": "#ffb01f",
            "--tw-prose-quotes": "#f2f2f2",
            "--tw-prose-quote-borders": "#ffb01f",
            "--tw-prose-counters": "#ffb01f",
            "--tw-prose-bullets": "#ffb01f",
            "--tw-prose-hr": "#292929",
            "--tw-prose-th-borders": "#292929",
            "--tw-prose-td-borders": "#292929",
            "--tw-prose-pre-bg": "#0f0f0f",
            "--tw-prose-pre-code": "#f2f2f2",
            "a": {
              "textDecoration": "underline",
              "textDecorationColor": "#ffb01f",
              "textUnderlineOffset": "3px",
              "&:hover": {
                "color": "#ffb01f",
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
