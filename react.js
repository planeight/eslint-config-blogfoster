module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    require.resolve('./rules/default'),
    require.resolve('./rules/react')
  ],
  rules: {}
};
