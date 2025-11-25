import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        // Meteor animation (diagonal fall)
        meteor: {
          "0%": {
            transform: "rotate(var(--angle)) translateY(-100%)",
            opacity: "0",
          },
          "50%": { opacity: "1" },
          "100%": {
            transform: "rotate(var(--angle)) translateY(100vh)",
            opacity: "0",
          },
        },
        // Accordion animations (used by shadcn accordion)
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Caret blink (used in inputs)
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        meteor: "meteor var(--duration,3s) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
      fontFamily: {
        IRANSansWeb: ["IRANSansWeb"],
        IranYekanWebBold: ["IranYekanWebBold"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class", // shadcn expects class-based dark mode
};

export default config;
