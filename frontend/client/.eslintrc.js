module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "sznm/react",
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "@nuxtjs/eslint-config-typescript",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/known-type-names": "error",
      },
    },
  ],
};
