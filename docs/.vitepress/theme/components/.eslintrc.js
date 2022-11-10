require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  rules: {
    'vue/multi-word-component-names': ['off'],
    'vue/no-reserved-component-names': ['off']
  }
}
