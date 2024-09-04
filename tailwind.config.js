/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  daisyui:{
    themes: [
      {
        winterTheme:{
          primary: '#D14343',
          secondary: '#101840',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          //  FF9C33 rgb(209,67,67) 6FB7F5 D14343
        }
      }
    ]
  },
  theme: {
    
  },
  plugins: [require("daisyui")],
}
// primary: #3BCF93