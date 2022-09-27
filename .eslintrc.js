module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "import-path", "simple-import-sort", "unused-imports"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    curly: "error",
    "prefer-object-spread": "error",
    "object-shorthand": ["error", "always"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          ["^@?\\w", "^[^.]", "^\\."],
        ],
      },
    ],
    "import/newline-after-import": ["error"],
    "consistent-return": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-unused-vars": "off", // to prevent conflict with unused-imports
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
};
