/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        pinkNai: "#FF7AA2",
        bgLightSearch: "#CB5DF1"
      },
      fontFamily: {
        Inter: "Inter",
      },
      width: {
        "90p": "90%",
      },
      animation: {
        boneSwing: "spin 3s linear infinite",
      },
      borderColor: {
        pinkNai: "#FF7AA2",
        searchColor: "#B9375E",
      }
    },
  },
  plugins: [],
};
