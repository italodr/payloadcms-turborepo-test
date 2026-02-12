import payloadEsLintConfig from "@payloadcms/eslint-config";
import payloadPlugin from "@payloadcms/eslint-plugin";

export const defaultESLintIgnores = [
  "**/.temp",
  "**/.*", // ignore all dotfiles
  "**/.git",
  "**/.hg",
  "**/.pnp.*",
  "**/.svn",
  "**/playwright.config.ts",
  "**/jest.config.js",
  "**/tsconfig.tsbuildinfo",
  "**/README.md",
  "**/eslint.config.js",
  "**/payload-types.ts",
  "**/dist/",
  "**/.yarn/",
  "**/build/",
  "**/node_modules/",
  "**/temp/",
];

/** @typedef {import('eslint').Linter.Config} */
let Config;

export const rootParserOptions = {
  sourceType: "module",
  ecmaVersion: "latest",
  projectService: {
    maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 40,
    allowDefaultProject: ["*.js", "*.mjs", "*.spec.ts", "*.d.ts"],
  },
};

/** @type {Config[]} */
export const rootEslintConfig = [
  ...payloadEsLintConfig,
  {
    ignores: [...defaultESLintIgnores, "packages/**/*.spec.tsx", "packages/**/*.test.tsx"],
  },
  {
    plugins: {
      payload: payloadPlugin,
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-restricted-exports": "off",
      "payload/no-jsx-import-statements": "warn",
      "payload/no-relative-monorepo-imports": "error",
      "payload/no-imports-from-exports-dir": "error",
      "payload/no-imports-from-self": "error",
      "perfectionist/sort-classes": "off",
    },
  },
  {
    files: ["./**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-restricted-exports": "off",
      "no-unused-vars": "off",
      "operator-linebreak": "off",
      "perfectionist/sort-object-types": "off",
      "perfectionist/sort-objects": "off",
    },
  },
];

export default [
  ...rootEslintConfig,
  {
    languageOptions: {
      parserOptions: {
        ...rootParserOptions,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
