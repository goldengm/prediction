
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          pink: "#f327f2",
          softDark: "#171b26",
          white: "#fcfcfc",
        },
        darkBg: "#040b28",
        darkText: "#151515",
        dashboard: {
          "dark-purple": "#2c254a",
          "light-purple": "#3b3363",
          pink: "#c83ba1",
          softLight: "#cccccc",
        },
        dapp: {
          black: {
            1: "#1b2333",
            2: "#131722",
            3: "#171D2B",
            4: "#141925",
            5: "#222D42",
          },
          gray: {
            1: "#808080",
          },
          blue: "#4845FF",
          red: "#EA0000",
          "dark-red": "#AD0000",
          green: "#00C948",
          pink: "#FF387A",
          yellow: "#F6921A",
          white: {
            10: "#ffffff10",
            20: "#ffffff20",
          },
        },
      },
    },
  },
  plugins: [],
};
