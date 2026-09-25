// Vite loads editable HTML files as text during development and builds.
declare module '*.html?raw' {
  const html: string;
  export default html;
}
