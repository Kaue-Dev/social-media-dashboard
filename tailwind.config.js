/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      lime: "hsl(163, 72%, 41%)",
      red: "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      youtube: "hsl(348, 97%, 39%)",
      instagram: "hsl(37, 97%, 70%)",
      darkBg: "hsl(230, 17%, 14%)",
      topDarkBg: "hsl(232, 19%, 15%)",
      cardDarkBg: "hsl(228, 28%, 20%)",
      blueDarkText: "hsl(228, 34%, 66%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
}

