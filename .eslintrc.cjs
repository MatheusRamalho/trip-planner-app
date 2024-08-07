module.exports = {
    root: true,
    extends: ['@rocketseat/eslint-config/react'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                semi: false,
                endOfLine: 'auto',
            },
        ],
    },
}
