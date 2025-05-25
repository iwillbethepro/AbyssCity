/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // ← 이 줄 꼭 추가!
    "./src/pages/**/*.{js,ts,jsx,tsx}",     // (선택) src/pages 구조도 지원할 때
    "./src/components/**/*.{js,ts,jsx,tsx}",// (선택) src/components 폴더도 지원할 때
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
