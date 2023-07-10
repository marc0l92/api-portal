import esbuild from 'esbuild'
import process from 'process'
import builtins from 'builtin-modules'
import sveltePlugin from 'esbuild-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import fs from 'fs-extra'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import yaml from 'js-yaml'
import { execSync } from 'child_process'

const argv = yargs(hideBin(process.argv)).argv
const prod = argv._.indexOf('production') >= 0
const watch = argv._.indexOf('watch') >= 0
let appConfig = {}
if (argv.configFile) {
  appConfig = yaml.load(fs.readFileSync(argv.configFile))
  console.log('Config loaded:', JSON.stringify(appConfig))
}
const releaseId = execSync('git rev-parse --short HEAD').toString().replace('\n', '')

/** @type {esbuild.BuildOptions} */
const webOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-portal',
  },
  entryPoints: [
    './src/home.ts',
    './src/browser.ts',
    './src/viewer.ts',
    './src/compare.ts',
    './src/apiToSpreadsheet.ts',
    './src/restApiToText.ts',
    './src/apiToPlantUml.ts',
    './src/apiServicesExtraction.ts',
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
    RELEASE_ID: JSON.stringify(releaseId),
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
const cliOptions = {
  banner: {
    js: '// Project: https://github.com/marc0l92/api-portal',
  },
  entryPoints: [{
    in: './src/cli.ts',
    out: './api-portal-cli'
  }],
  bundle: true,
  external: [...builtins],
  mainFields: ["module", "main"],
  format: 'cjs',
  logLevel: 'info',
  sourcemap: 'inline',
  treeShaking: true,
  outdir: './dist',
  minify: false,
  target: [
    'node16',
  ],
  define: {
    IS_TEST: JSON.stringify(!prod),
    APP_CONFIG: JSON.stringify(appConfig),
    RELEASE_ID: JSON.stringify(releaseId),
  },
}

// Copy modules css
fs.copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css', './public/css/swagger-ui.css')
fs.copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css.map', './public/css/swagger-ui.css.map')
fs.copyFileSync('./node_modules/swagger-ui-flat-model-plugin/dist/swagger-ui-flat-model-plugin.css', './public/css/swagger-ui-flat-model-plugin.css')

if (prod || !watch) {
  esbuild.build(webOptions).catch(() => process.exit(1))
  esbuild.build(cliOptions).catch(() => process.exit(1))
} else {
  // Web
  const webCtx = await esbuild.context(webOptions)
  webCtx.watch().catch(() => process.exit(1))
  webCtx.serve({ servedir: 'public', port: 9000 }).catch(() => process.exit(1))
  // CLI
  const cliCtx = await esbuild.context(cliOptions)
  cliCtx.watch().catch(() => process.exit(1))
}
