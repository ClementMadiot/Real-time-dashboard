/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react"],
          ["^@refine"],
          ["^@?\\w"],
          ["^"],
          ["^\\."],
          ["^\\u0000"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
