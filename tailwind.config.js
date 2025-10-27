/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-y": "marquee-y 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-y": {
          "0%": { transform: "translateY(0%)" },
          // This is the key change for a seamless loop
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
