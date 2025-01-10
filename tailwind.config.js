/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./templates/**/*.html",  // Django templates
      "./frontend/src/**/*.{vue,js}", // Vue components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  