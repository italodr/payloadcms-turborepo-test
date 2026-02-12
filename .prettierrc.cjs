module.exports = {
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  printWidth: 100,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: ["*.css"],
      options: {
        parser: "css",
        tabWidth: 4,
      },
    },
    {
      files: ["*.scss"],
      options: {
        parser: "scss",
        tabWidth: 4,
      },
    },
  ],
};
