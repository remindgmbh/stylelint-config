module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss',
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'prettier/prettier': [
            true,
            {
                singleQuote: true,
                semi: false,
            },
        ],
    },
    plugins: ['stylelint-prettier'],
}
