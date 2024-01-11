/* eslint-disable unicorn/prefer-module */
/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
        ignore: [
          /\$[A-Za-z]+\.tsx/,
          /_[A-Za-z]+\.tsx/,
          /[A-Z][a-z]+(?:_[a-z]+)*\.ts/, // Regex to ignore patterns like TypeNt_experience.ts
        ],
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-logical-operator-over-ternary': 'off',
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/prefer-spread': 'off',
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts'], // Adjust the pattern to match your test files
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
