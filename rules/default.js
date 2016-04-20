module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parser: 'babel-eslint',
  rules: {
    'prefer-arrow-callback': 0,
    'arrow-body-style': 0,
    'array-bracket-spacing': [ 2, 'always' ],
    'comma-dangle': [ 2, 'never' ],
    'space-before-function-paren': [ 2, { anonymous: 'always', named: 'never' } ],
    'object-curly-spacing': [ 2, 'always' ],
    'max-len': [ 1, 120, 2, { ignoreComments: true } ],
    'no-shadow': 0,
    'no-param-reassign': 0,
    'func-names': 0,
    curly: [ 2, 'all' ]
  }
};
