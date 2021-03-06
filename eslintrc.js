exports.default = {
    extends: ['airbnb', 'prettier'],
    plugins: ['typescript', 'prettier', 'react-hooks'],
    parser: 'typescript-eslint-parser',
    parserOptions: {
        jsx: true,
        useJSXTextNode: true,
    },
    globals: {
        __DEV__: true,
        React: true,
    },
    env: {
        jest: true,
        browser: true,
        es6: true,
        node: true,
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'class-methods-use-this': 0,
        'import/first': false,
        'import/no-extraneous-dependencies': false,
        'import/no-unresolved': false,
        'import/order': 0,
        'import/prefer-default-export': false,
        'jsx/curl-brace-presence': 0,
        'no-nested-ternary': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'no-unused-vars': 0,
        'prefer-promise-reject-errors': 0,
        'react/jsx-curl-brace-preserve': false,
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-no-bind': false,
        'react/prefer-stateless-function': false,
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'all',
                singleQuote: true,
            },
        ],
    },
};