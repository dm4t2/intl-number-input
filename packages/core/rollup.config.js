import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const banner = `/**
 * @intl-number-input/core ${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`

export default [
  {
    input: `src/index.ts`,
    output: [
      {
        file: pkg.main,
        name: 'NumberInput',
        format: 'cjs',
        banner
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        banner
      }
    ],
    plugins: [typescript({ useTsconfigDeclarationDir: true })]
  },
  {
    input: './dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]
