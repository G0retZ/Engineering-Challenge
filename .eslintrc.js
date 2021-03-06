const commonRules = {
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'never'],
  'no-undef': 'off',
  'no-unused-vars': 'off',
  'no-console': 'warn',
  'react/jsx-uses-vars': 2,
  'react/jsx-uses-react': 'error',
  'react/jsx-no-bind': 'off',
  'react/no-string-refs': 'off',
  'react/jsx-key': 'off',
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/no-children-prop': 'error',
  'react/no-deprecated': 'warn',
  'react/no-unescaped-entities': 'warn',
  'prefer-spread': 'off',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      alphabetize: { order: 'asc' },
      'newlines-between': 'always',
    },
  ],
  'sort-imports': ['error', { ignoreDeclarationSort: true }],
  'max-classes-per-file': ['error', 3],
  'no-restricted-imports': ['error', { paths: ['lodash', 'lodash/chain'] }],
  'jest/no-test-callback': 'off',
  'jest/no-commented-out-tests': 'off',
  'jest/no-standalone-expect': 'off',
  'jest/expect-expect': 'off',
  'jest/no-jasmine-globals': 'off',
}

const commonPluggins = ['react', 'import']

module.exports = {
  env: {
    browser: false,
    commonjs: false,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    __DEV__: false,
    requestAnimationFrame: false,
    fetch: false,
    navigator: false,
    FormData: false,
    danger: false,
    warn: false,
    fail: false,
    schedule: false,
    markdown: false,
  },
  ignorePatterns: [
    '**/*.test.js',
    '**/*.test.tsx',
    '**/*.test.ts',
    'js/*/stories/**',
    'js/**/*e2e*',
    'e2e/fixtures/**',
    '**/*.json',
    'node_modules/**',
    './gulpfile.babel.js',
    'scripts/**',
    './dangerfile.ts',
    'js/storybook/stories/**',
    'ios/**',
  ],
  extends: ['prettier', 'plugin:react/recommended', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [...commonPluggins],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'ts',
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: { ...commonRules },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
      },
      plugins: [...commonPluggins, '@typescript-eslint', '@typescript-eslint/tslint'],
      extends: [
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...commonRules,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: { delimiter: 'none', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: false },
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-var-requires': 'off', // todo
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/triple-slash-reference': [
          'error',
          { path: 'always', types: 'prefer-import', lib: 'always' },
        ],
        '@typescript-eslint/unified-signatures': 'error',
      },
    },
  ],
}
