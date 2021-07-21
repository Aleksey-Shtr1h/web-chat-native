module.exports = {
  //   parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      js: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  //   extends: [
  //     'plugin:react/recommended',
  //     'plugin:@typescript-eslint/recommended',
  //   ],
  //   rules: {
  //     'no-console': 'off',
  //   },
};
