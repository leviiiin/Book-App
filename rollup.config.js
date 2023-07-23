import { nodeResolve } from '@rollup/plugin-node-resolve';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isProduction = process.env.NODE_ENV === 'production';
const hash = Math.random().toString(36).slice(2, 7);

export default {
  input: 'src/app.js',
  output: {
    sourcemap: true,
    file: isProduction ? `dist/app.${hash}.js` : 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    postcss({
      extract: true,
      inject: {
        insertAt: 'top',
      },
      hash: true,
    }),
    htmlTemplate({
      template: 'src/template.html',
      target: 'index.html',
    }),
    copy({
      targets: [
        {src: 'static', dest: 'dist'},
      ]
    }),
    !isProduction && serve({
      contentBase: 'dist',
    }),
    !isProduction && livereload('dist'),
  ]
}

