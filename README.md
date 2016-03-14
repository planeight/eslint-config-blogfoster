# eslint-config-blogfoster

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
