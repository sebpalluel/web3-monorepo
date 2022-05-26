module.exports = {
    extends: ["stylelint-config-recommended", "stylelint-config-standard"],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': [
            true,
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null
    }
}
