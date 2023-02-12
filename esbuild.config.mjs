import esbuild from 'esbuild'
import process from 'process'
import builtins from 'builtin-modules'
import sveltePlugin from "esbuild-svelte"
import sveltePreprocess from "svelte-preprocess"
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import fs from 'fs'

const prod = (process.argv[2] === 'production')

/** @type {esbuild.BuildOptions} */
const webOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-tools',
  },
  entryPoints: [
    './src/home.ts',
    './src/browser.ts',
    './src/viewer.ts',
    './src/apiToSpreadsheet.ts',
    './src/restApiToText.ts',
    './src/apiToPlantUml.ts'
  ],
  bundle: true,
  external: [...builtins],
  mainFields: ["svelte", "browser", "module", "main"],
  format: 'esm',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  treeShaking: true,
  outdir: './public/js',
  minify: prod,
  platform: 'browser',
  splitting: true,
  target: [
    'es2020',
    'chrome58',
    'edge18',
    'firefox57',
    'node16',
    'safari11',
  ],
  define: {
    IS_TEST: JSON.stringify(!prod),
  },
  plugins: [
    sveltePlugin({
      preprocess: sveltePreprocess(),
      compilerOptions: { css: true },
    }),
    NodeModulesPolyfillPlugin(),
  ],
}

/** @type {esbuild.BuildOptions} */
const moduleOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-tools',
  },
  entryPoints: [{
    in: './src/module.ts',
    out: './api-tools'
  }],
  bundle: true,
  external: [...builtins],
  mainFields: ["module", "main"],
  format: 'cjs',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  treeShaking: true,
  outdir: './dist',
  minify: prod,
  target: [
    'node16',
  ],
  define: {
    IS_TEST: JSON.stringify(!prod),
  },
}

// Copy modules css
fs.copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css', './public/css/swagger-ui.css')
fs.copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css.map', './public/css/swagger-ui.css.map')

if (prod) {
  esbuild.build(webOptions).catch(() => process.exit(1))
  esbuild.build(moduleOptions).catch(() => process.exit(1))
} else {
  // Web
  const webCtx = await esbuild.context(webOptions)
  webCtx.watch().catch(() => process.exit(1))
  webCtx.serve({ servedir: 'public', port: 9000 }).catch(() => process.exit(1))
  // Module
  const moduleCtx = await esbuild.context(moduleOptions)
  moduleCtx.watch().catch(() => process.exit(1))
}
