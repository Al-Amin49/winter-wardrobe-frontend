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
          primary: '#6FB7F5',
          secondary: '#FF9C33',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    
  },
  plugins: [require("daisyui")],
}
// primary: #3BCF93