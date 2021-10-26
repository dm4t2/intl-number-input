module.exports = {
  root: true,
  env: {
    node: true
  },
  ignorePatterns: ['dist/**', 'coverage/**'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: { '@typescript-eslint/ban-ts-ignore': 'off' },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
