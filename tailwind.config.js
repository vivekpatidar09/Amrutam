module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        near360: { min: "370px", max: "420px" }, // Custom range
        near340: { min: "340px", max: "360px" }, // Custom range
        near430: { min: "430px", max: "430px" }, // Custom range
        near540: { min: "540px", max: "550px" }, // Custom range
        near912: { min: "912px", max: "930px" }, // Custom range
        near1024: { min: "1024px", max: "1024px" }, // Custom range
      },
    },
  },
  plugins: [],
};
