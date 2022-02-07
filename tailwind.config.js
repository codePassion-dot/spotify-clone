// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1350px",
      // => @media (min-width: 1350px) { ... }

      desktop: "1900px",
      // => @media (min-width: 1900px) { ... }

      largeDesktop: "2400px",
      // => @media (min-width: 2400px) { ... }
    },
    fontFamily: { poppins: "Poppins" },
    extend: {
      width: { 128: "32rem" },
      colors: {
        "facebook-blue": "#3b5998",
        "apple-black": "#191919",
        "default-grey": "#6a6a6a",
        "button-default": "#878787",
        "checkbox-green": "#169b45",
        "button-green": "#1fdf64",
        "playlist-grey": "#b2b2b2",
        "liked-songs-left": "#3b1ba9",
        "liked-songs-rigth": "#6566a0",
        "navbar-divider-grey": "#282828",
        "navbar-item-text": "#b3b3b3",
      },
    },
  },
  plugins: [],
};
