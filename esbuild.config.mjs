import esbuild from 'esbuild'
import process from 'process'
import builtins from 'builtin-modules'

const prod = (process.argv[2] === 'production')

const ctx = await esbuild.context({
  banner: {
    js: '// Project: https://github.com/marc0l92/api-tools',
  },
  entryPoints: ['./src/apiToSpreadsheet.ts'],
  bundle: true,
  external: [...builtins],
  format: 'cjs',
  // watch: !prod,
  target: 'es2020',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  treeShaking: true,
  outfile: './public/js/apiToSpreadsheet.js',
  minify: prod,
  target: [
    // 'es2020',
    // 'chrome58',
    'edge18',
    // 'firefox57',
    // 'node12',
    // 'safari11',
  ],
})

if (prod) {
  ctx.rebuild().catch(() => process.exit(1))
} else {
  ctx.watch().catch(() => process.exit(1))
  ctx.serve({ servedir: 'public', port: 9000 }).catch(() => process.exit(1))
}
