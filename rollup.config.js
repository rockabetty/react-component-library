const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const dts = require("rollup-plugin-dts");

// Read package.json
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json'));

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types",
        jsx: "react",
        noEmitOnError: false 
      }),
      postcss({
        plugins: [autoprefixer()],
        inject: true, // Inject CSS into JS
        minimize: true,
        // Don't extract to a single file
        extract: false,
      }),
      terser(),
    ],
    external: ["react", "react-dom", ...Object.keys(packageJson.dependencies || {})],
  },
  // {
  //   input: "dist/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts.default()],
  // },
];