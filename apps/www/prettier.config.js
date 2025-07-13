/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'cn', 'cx', 'clsx'],
  tailwindStylesheet: './src/assets/styles/tailwind.css',
}
