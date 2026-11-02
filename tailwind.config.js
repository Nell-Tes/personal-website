/** @type {import('tailwindcss').Config} */
const withAlpha = (v) => `rgb(var(${v}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    container: { center: true, padding: '1.25rem', screens: { '2xl': '1120px' } },
    extend: {
      colors: {
        bg: withAlpha('--bg'),
        surface: withAlpha('--surface'),
        subtle: withAlpha('--subtle'),
        line: withAlpha('--line'),
        fg: withAlpha('--fg'),
        muted: withAlpha('--muted'),
        brand: withAlpha('--brand'),
        'brand-fg': withAlpha('--brand-fg'),
        link: withAlpha('--link'),
        ok: withAlpha('--ok'),
        navy: { 50: '#FEFEFE', 100: '#E7E9F0', 500: '#535F80', 800: '#081F62', 900: '#051747' },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { prose: '65ch' },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'none' } },
      },
      animation: { 'fade-up': 'fade-up .6s cubic-bezier(.2,.8,.2,1) both' },
    },
  },
  plugins: [],
};
