import { PluginCreator } from "postcss";
import type { Config } from "tailwindcss";

// @ts-ignore
const plugin: PluginCreator<any> = ({ addUtilities }) => {
  addUtilities({
    ".container-max": {
      maxWidth: 1920,
      margin: "auto",
    },
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "0.25": "1px",
        88: "22rem",
      },
      borderWidth: {
        "3": "3px",
      },
      fontFamily: {
        primary: "var(--font-poppins)",
      },
      fontSize: {
        "7.5xl": "4.5rem",
      },
      screens: {
        xsm: "480px",
        sm: "640px",
        md: "796px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1580px",
        "4xl": "1850px",
      },
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out",
      "fade-up": "fade-up 0.5s ease-out",
      spin: "spin 1s linear infinite",
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      "fade-up": {
        "0%": {
          opacity: "0",
          transform: "translateY(40px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },

      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  plugins: [plugin],
};
export default config;
