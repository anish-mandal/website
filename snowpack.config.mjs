/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  root: './src',
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: ["@snowpack/plugin-postcss"],
  buildOptions: {
    baseUrl: './../'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
