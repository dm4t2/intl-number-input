import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const banner = `/**
 * Intl Number Input ${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */`

export default [
  {
    input: `./src/index.ts`,
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
  }
]
