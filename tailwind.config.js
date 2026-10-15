/** Tailwind 本地构建配置 —— 将 Play CDN 换成离线构建，摆脱对国外 CDN 的依赖 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}