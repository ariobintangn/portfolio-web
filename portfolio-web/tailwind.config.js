/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/index.tsx",
    "./src/components/Card.tsx",
    "./src/components/Profile.tsx",
    "./src/components/Header.tsx",
  ],
  theme: {
    extend: {
      backgroundColor: {
        profileGray: "rgb(200,200,200)",
        darkPurple1: "#281826",
        darkPurple2: "#3C2439",
        darkPurple3: "#502F4C",
        darkPurple4: "#604464",
        lightPurple1: "#9C88AC",
        lightPurple2: "#C8B8DB",
        lightPurple3: "#E1D6E8",
        brokenWhite: "#F9F4F5",
      },
      fontFamily: {
        monoton: "'Monoton', cursive",
        oxygen: "'Oxygen Mono', monospace",
      },
      textColor: {
        brokenWhite: "#F9F4F5",
        blacker: "#000000",
      },
      colors: {
        darkPurple1: "#281826",
        darkPurple2: "#3C2439",
        darkPurple3: "#502F4C",
        darkPurple4: "#604464",
      },
    },
  },
  plugins: [],
}

