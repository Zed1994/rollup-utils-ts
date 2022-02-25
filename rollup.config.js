import resolve from "rollup-plugin-node-resolve"
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'; // 用于压缩代码的插件
import {name} from './package.json'

const mode = process.env.MODE;
const isProd = mode === 'prod';

const extensions= ['.js', '.ts', '.vue']
const config = {
  input: "./main.ts", // 必须，入口文件
  output: {
    file: 'dist/bundle.js',
    name,
    format: 'cjs',
  },
  external: ['element-plus', 'vue'], // 剔除项，不会参与打包
  plugins: [
    resolve({ extensions, browser: true}),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "**/node_modules/**"
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: { compilerOptions: { sourceMap: !isProd } }
    }),
    commonjs(),
    terser() // 压缩代码，不想压缩就不配置
  ]
}

export default config