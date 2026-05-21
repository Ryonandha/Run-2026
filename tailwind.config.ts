import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004F6E", // primary-grad-end
          foreground: "#FFFFFF",
          gradStart: "#00D27F", // primary-grad-start
        },
        accent: {
          leaf: "#67B00C", // accent-leaf
          ball: "#67B00C", // accent-ball
        },
        bg: {
          light: "#FFFFFF",
        },
        text: {
          dark: "#004F6E", // text-primary
        },
        // Tambahkan warna lain seperti border, input, dll.
      },
      // ...konfigurasi lainnya
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config