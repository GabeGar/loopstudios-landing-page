/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-white": "hsl(var(--white) / <alpha-value>)",
                "primary-black": "hsl(var(--black) / <alpha-value>)",
                "primary-dark-gray": "hsl(var(--dark-gray) / <alpha-value>)",
                "primary-very-dark-gray":
                    "hsl(var(--very-dark-gray) / <alpha-value>)",
            },
            fontFamily: {
                alata: "'alata', var(--font-fallback)",
                josefinSans: "'josefinSans', var(--font-fallback)",
            },
        },
    },
    plugins: [],
};
