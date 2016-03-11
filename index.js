module.exports = {
  env: {
    'es6': true,
    'node': true,
    'mocha': true,
  },
  parser: require.resolve('babel-eslint'),
  extends: [
    require.resolve('eslint-config-airbnb/base'),
    require.resolve('./rules/default')
  ],
  rules: {}
};
