/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss',
        'stylelint-config-prettier-scss',
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        'at-rule-no-unknown': null,
        'declaration-property-value-no-unknown': null,
        'prettier/prettier': [
            true,
            {
                semi: false,
                singleQuote: true,
            },
        ],
        'scss/at-rule-no-unknown': true,
        'scss/declaration-property-value-no-unknown': true,
    },
}
