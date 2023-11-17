/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img_bg_hero': "url('../assets/bg-hero.png')",
        'img_bg_card': "url('../assets/bg-card.png')",
        'img_bg_sec5': "url('../assets/bg-section5.png')"
      },
    },
  },
  plugins: [],
}
