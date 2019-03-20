module.exports = {
  // "env": {
  //     "browser": true,
  //     "es6": true
  // },
  // "globals": {
  //     "Atomics": "readonly",
  //     "SharedArrayBuffer": "readonly"
  // },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    // "project": "./tsconfig.json",
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/indent': ['error', 2],
    'import/no-unresolved': 0,
  },
}
