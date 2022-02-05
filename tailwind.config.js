// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
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
      },
    },
  },
  plugins: [],
};
