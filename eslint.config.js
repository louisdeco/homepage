import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["./dist/**/*"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      quotes: ["error", "single"],
    },
  },
];
