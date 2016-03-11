module.exports = {
  env: {
    'es6': true,
    'node': true,
    'mocha': true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb/base',
    'rules/default',
  ].map(require.resolve),
  rules: {}
};