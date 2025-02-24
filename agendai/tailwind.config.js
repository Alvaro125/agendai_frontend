/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Aponta para os arquivos do App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Se você tiver uma pasta de componentes
    "./src/styles/**/*.{css,scss}", // Aponta para arquivos de estilos, caso use
    "./src/utils/**/*.{js,ts}", // Caso tenha scripts auxiliares
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
