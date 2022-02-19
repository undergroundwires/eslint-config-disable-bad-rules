module.exports = {
  rules: {
    // https://erkinekici.com/articles/eslint-nonstyle-guide#no-use-before-define
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // https://erkinekici.com/articles/eslint-nonstyle-guide#arrow-body-style
    'arrow-body-style': 'off',

    // https://erkinekici.com/articles/eslint-nonstyle-guide#no-plusplus
    'no-plusplus': 'off',

    // https://erkinekici.com/articles/eslint-nonstyle-guide#no-param-reassign
    'no-param-reassign': 'off',

    // https://erkinekici.com/articles/eslint-nonstyle-guide#class-methods-use-this
    'class-methods-use-this': 'off',

    // https://erkinekici.com/articles/eslint-nonstyle-guide#importprefer-default-export
    'import/prefer-default-export': 'off',

    // https://erkinekici.com/articles/linting-trap#disallowing-for-of
    // We cannot really disable "no-restricted-syntax" as it would break other configurations
    // 'no-restricted-syntax': 'off',
  },
};
