import esbuild from 'esbuild'
import process from 'process'
import builtins from 'builtin-modules'
import sveltePlugin from "esbuild-svelte"
import sveltePreprocess from "svelte-preprocess"
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import fs from 'fs-extra'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import yaml from 'js-yaml'
import type { ArgvConfig } from './argvConfig'

const argv = yargs(hideBin(process.argv)).argv as any as ArgvConfig
const prod = argv._.indexOf('production') >= 0
let appConfig = {}
if (argv.configFile) {
  appConfig = yaml.load(fs.readFileSync(argv.configFile).toString())
  console.log('Config loaded:', appConfig)
}

const webOptions: esbuild.BuildOptions = {
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
    APP_CONFIG: JSON.stringify(appConfig),
  },
  plugins: [
    sveltePlugin({
      preprocess: sveltePreprocess(),
      compilerOptions: { css: true },
    }),
    NodeModulesPolyfillPlugin(),
  ],
}

const moduleOptions: esbuild.BuildOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-tools',
  },
  entryPoints: [{
    in: './src/apiToolsModule.ts',
    out: './api-tools'
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
  target: [
    'node16',
  ],
  define: {
    IS_TEST: JSON.stringify(!prod),
    APP_CONFIG: JSON.stringify(appConfig),
  },
}

// Copy modules css
fs.copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css', './public/css/swagger-ui.css')
fs.copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css.map', './public/css/swagger-ui.css.map')
fs.copyFileSync('./node_modules/swagger-ui-flat-model-plugin/dist/swagger-ui-flat-model-plugin.css', './public/css/swagger-ui-flat-model-plugin.css')

if (prod) {
  esbuild.build(webOptions).catch(() => process.exit(1))
  esbuild.build(moduleOptions).catch(() => process.exit(1))
} else {
  // Web
  esbuild.context(webOptions).then((ctx) => {
    ctx.watch().catch(() => process.exit(1))
    ctx.serve({ servedir: 'public', port: 9000 }).catch(() => process.exit(1))
  })
  // Module
  esbuild.context(moduleOptions).then((ctx) => {
    ctx.watch().catch(() => process.exit(1))
  })
}
