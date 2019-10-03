module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest', 'import', 'babel'],
  extends: ['airbnb', 'prettier'],
  env: {
    'jest/globals': true,
    browser: true,
  },
  // use eslint-import-resolver-webpack to parse alias in webpack
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // doesn't fail when using do expressions or optional chaining
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
  },
};
