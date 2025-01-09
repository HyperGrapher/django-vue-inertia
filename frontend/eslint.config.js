import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import * as parser from 'vue-eslint-parser'

const compat = new FlatCompat()

export default [
  js.configs.recommended,
  ...compat.config({
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
  }),
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'vue/script-setup-uses-vars': 'error',
      'vue/no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
    },
  },
  prettier,
]
