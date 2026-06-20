/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                background: 'var(--color-background)',
                text: 'var(--color-text)',
                nav: 'var(--nav-bg)',
                navText: 'var(--nav-text)',
                navBorder: 'var(--nav-border)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Optional: Add a clean font
            }
        },
    },
    plugins: [],
}