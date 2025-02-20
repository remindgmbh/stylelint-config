/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss',
        'stylelint-config-prettier-scss',
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'declaration-property-value-no-unknown': null,
        'scss/declaration-property-value-no-unknown': true,
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
