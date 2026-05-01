import type { Plugin } from 'esbuild';
import { compile } from 'sass';
import { defineConfig } from 'tsup';

const scssPlugin: Plugin = {
  name: 'scss',
  setup(build) {
    build.onLoad({ filter: /\.scss$/ }, (args) => {
      const result = compile(args.path, {
        style: 'expanded',
      });

      return {
        contents: result.css,
        loader: 'css',
      };
    });
  },
};

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ['react', 'react-dom'],
  esbuildPlugins: [scssPlugin],
});
