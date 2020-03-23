import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import del from 'rollup-plugin-delete'
export default {
 input: 'src/main.ts', // our source file
 output: [
  {
   file: "dist/data-Structures.cjs.js",
   format: 'cjs'
  },
  {
   file: "dist/data-Structures.esm.js",
   format: 'esm' // the preferred format
  },
//   {
//    file: pkg.browser,
//    format: 'iife',
//    name: 'MyPackage' // the global which can be used in a browser
//   }
 ],
//  external: [
//   ...Object.keys(pkg.dependencies || {})
//  ],
 plugins: [
  typescript({
   typescript: require('typescript'),
  }),
  del(["dist/*"]),
  terser() // minifies generated bundles
 ]
}