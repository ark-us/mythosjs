import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default [
  // UMD build (unminified)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/wasmxjs.umd.js',
      format: 'umd',
      name: 'WasmxJS',
      sourcemap: true,
      globals: {
        // If you want to externalize some dependencies, specify them here
      }
    },
    plugins: [
      nodePolyfills(),
      json(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
  },
  // UMD build (minified)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/wasmxjs.umd.min.js',
      format: 'umd',
      name: 'WasmxJS',
      sourcemap: true,
    },
    plugins: [
      nodePolyfills(),
      json(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
      terser(),
    ],
  },
  // ES Module build (for modern browsers and bundlers)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/wasmxjs.esm.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      nodePolyfills(),
      json(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
  },
  // ES Module build (minified)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/wasmxjs.esm.min.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      nodePolyfills(),
      json(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
      terser(),
    ],
  },
];
