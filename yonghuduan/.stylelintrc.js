module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    "prettier/prettier": [true, { "singleQuote": true, "tabWidth": 4 }]
  }
}
