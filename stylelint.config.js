module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  ignoreFiles: ['**/*.jsx', '**/*.tsx', '**/*.json', 'node_modules/**/*'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
}
