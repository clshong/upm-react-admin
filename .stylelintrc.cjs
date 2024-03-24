module.exports = {
  extends: ["stylelint-config-standard-less", "stylelint-config-recess-order"],
  overrides: [{ files: ["**/*.less"], customSyntax: "postcss-less" }],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "color-function-notation": null,
    "font-family-no-missing-generic-family-keyword": null,
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"]
  }
};
