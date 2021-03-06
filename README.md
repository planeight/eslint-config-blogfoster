# eslint-config-blogfoster

[![travis-develop][001]][002]
[![npm-dependencies][003]][004]

This package provides blogfoster's .eslintrc as an extensible shared config.

## Usage

We've created the following configurations and rule sets:

### eslint-config-blogfoster

Our default export contains all of our ESLint rules.

1. `npm install --save-dev eslint-config-blogfoster`
2. add `"extends": "blogfoster"` to your .eslintrc

### eslint-config-blogfoster/react

Contains all rules from `eslint-config-blogfoster` + all React specific rules and plugins.

1. `npm install --save-dev eslint-config-blogfoster`
2. add `"extends": "blogfoster/react"` to your .eslintrc


[001]: https://travis-ci.org/blogfoster/eslint-config-blogfoster.svg?branch=master
[002]: https://travis-ci.org/blogfoster/eslint-config-blogfoster
[003]: https://david-dm.org/blogfoster/eslint-config-blogfoster.svg
[004]: https://david-dm.org/blogfoster/eslint-config-blogfoster
