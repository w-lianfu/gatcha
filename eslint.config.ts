import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import react from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // ------ typescript-eslint rules ------
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      // https://typescript-eslint.io/rules/no-empty-interface/
      '@typescript-eslint/no-empty-interface': 'off',
      'react-refresh/only-export-components': 'off',

      // eslint 配置参考: https://github.com/airbnb/javascript
      // ------ eslint rules ------
      'no-unused-vars': 'off',
      'no-empty-function': 'off',
      // https://eslint.org/docs/latest/rules/no-new-object
      'no-new-object': 'error',
      // https://eslint.org/docs/latest/rules/object-shorthand
      'object-shorthand': ['error', 'always'],
      // https://eslint.org/docs/latest/rules/quote-props
      'quote-props': ['error', 'as-needed'],
      // https://github.com/airbnb/javascript?tab=readme-ov-file#arrays--callback-return
      'array-callback-return': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#destructuring--object
      'prefer-destructuring': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#strings--quotes
      quotes: ['error', 'single'],
      // https://eslint.org/docs/latest/rules/func-style
      'func-style': ['error', 'expression'],
      // https://eslint.org/docs/latest/rules/wrap-iife
      'wrap-iife': ['error', 'outside'],
      // https://eslint.org/docs/latest/rules/no-loop-func
      'no-loop-func': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#functions--signature-spacing
      'space-before-function-paren': ['error', 'never'],
      // https://eslint.org/docs/latest/rules/space-before-blocks
      'space-before-blocks': ['error', 'always'],
      // https://github.com/airbnb/javascript?tab=readme-ov-file#arrows--use-them
      'prefer-arrow-callback': 'error',
      // https://eslint.org/docs/latest/rules/arrow-spacing
      'arrow-spacing': ['error', { before: true, after: true }],
      // https://eslint.org/docs/latest/rules/arrow-parens
      'arrow-parens': ['error', 'as-needed'],
      // https://eslint.org/docs/latest/rules/arrow-body-style
      // 'arrow-body-style': ['error', 'as-needed'],
      // https://eslint.org/docs/latest/rules/no-duplicate-imports
      'no-duplicate-imports': 'error',
      // https://eslint.org/docs/latest/rules/no-restricted-syntax
      'no-restricted-syntax': ['error', 'FunctionExpression'],
      // https://eslint.org/docs/latest/rules/semi
      semi: ['error', 'always'],
      // https://eslint.org/docs/latest/rules/indent
      indent: ['error', 2],
      // https://eslint.org/docs/latest/rules/no-plusplus
      'no-plusplus': 'error',
      // https://eslint.org/docs/latest/rules/max-len
      'max-len': ['error', { code: 100 }],
      // https://eslint.org/docs/latest/rules/no-unused-vars
      // 'no-unused-vars': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#no-use-before-define
      'no-use-before-define': 'error',
      // https://eslint.org/docs/latest/rules/brace-style
      // 'brace-style': 'error',
      // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
      'nonblock-statement-body-position': ['error', 'beside'],
      // https://github.com/airbnb/javascript?tab=readme-ov-file#blocks--no-else-return
      'no-else-return': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#comments--spaces
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
      'implicit-arrow-linebreak': ['error', 'beside'],
      // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
      'no-multiple-empty-lines': 'error',
      // https://eslint.org/docs/latest/rules/padded-blocks
      'padded-blocks': ['error', 'never'],
      // https://eslint.org/docs/latest/rules/space-in-parens
      'space-in-parens': ['error', 'never'],
      // https://eslint.org/docs/latest/rules/object-curly-spacing
      'object-curly-spacing': ['error', 'always'],
      // https://eslint.org/docs/latest/rules/array-bracket-spacing
      'array-bracket-spacing': ['error', 'never'],
      // https://eslint.org/docs/latest/rules/block-spacing
      'block-spacing': 'error',
      // https://eslint.org/docs/latest/rules/comma-spacing
      'comma-spacing': ['error', { before: false, after: true }],
      // https://eslint.org/docs/latest/rules/func-call-spacing
      'func-call-spacing': ['error', 'never'],
      // https://eslint.org/docs/latest/rules/key-spacing
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      // https://eslint.org/docs/latest/rules/no-trailing-spaces
      'no-trailing-spaces': 'error',
      // https://eslint.org/docs/latest/rules/comma-style
      'comma-style': ['error', 'last'],
      // https://eslint.org/docs/latest/rules/comma-dangle
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  { ignores: ['dist/'] },
];
