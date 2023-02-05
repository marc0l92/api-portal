import esbuild from 'esbuild'
import process from 'process'
import builtins from 'builtin-modules'
import sveltePlugin from "esbuild-svelte"
import sveltePreprocess from "svelte-preprocess"

const prod = (process.argv[2] === 'production')

/** @type {esbuild.BuildOptions} */
const webOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-tools',
  },
  entryPoints: [
    './src/home.ts',
    './src/apiToSpreadsheet.ts',
    './src/restApiToText.ts',
    './src/apiToPlantuml.ts'
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
    'node12',
    'safari11',
  ],
  define: {
    IS_TEST: JSON.stringify(!prod),
  },
  plugins: [sveltePlugin({
    preprocess: sveltePreprocess(),
    compilerOptions: { css: true },
  })],
}

/** @type {esbuild.BuildOptions} */
const moduleOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-tools',
  },
  entryPoints: [{
    in: './src/module.ts',
    out: './api-tools.js'
  }],
  bundle: true,
  external: [...builtins],
  mainFields: ["module", "main"],
  format: 'esm',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  treeShaking: true,
  outdir: './dist',
  minify: prod,
  splitting: false,
  target: [
    'node12',
  ],
  define: {
    IS_TEST: JSON.stringify(!prod),
  },
}


if (prod) {
  // esbuild.build(webOptions).catch(() => process.exit(1))
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
