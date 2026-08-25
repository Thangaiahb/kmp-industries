import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    // Primary: Deep Navy Blue (Trust, Quality)
                    blue: "#003153",
                    "blue-light": "#4a90e2",

                    // Accent: Vibrant Red (Action, Energy - CTA-க்கு பயன்படுத்தவும்)
                    red: "#cc0000",
                    "red-dark": "#990000",

                    // Dark & Light shades
                    dark: "#0a1922",
                    "dark-light": "#112240",
                    gray: "#64748b",
                    "gray-light": "#f4f7f9",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;