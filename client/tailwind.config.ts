/** @type {import('tailwindcss').Config} */


export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'karla': ['Karla', 'sans-serif'],
            'roboto': ['Roboto', 'sans-serif'],
            'virgil': ['Virgil', 'sans-serif'],
        },
    },
    darkMode: "class",
};
