import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ["var(--font-source-serif)", ...fontFamily.sans],
        sans: ["var(--font-noto-sans)", ...fontFamily.sans],
      },
      colors: {
        dark: "#414141",
        gray: "#6b6b6b",
        gray_lighter: "#e6e6e6",
        red: "#e02044",
        green: "#4b6b35",
        red_darker: "#a7282e",
        gray_hover: "#F5F5F5",
        purple_darker: "#503454",
      },
      borderWidth: {
        1: "1px",
      },
      padding: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
        longer8: "22vw",
        longer9: "24vw",
        longer10: "26vw",
      },
      margin: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
        longer8: "22vw",
        longer9: "24vw",
        longer10: "26vw",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
