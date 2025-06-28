import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import prettier from "@vue/eslint-config-prettier";
import importsort from "eslint-plugin-simple-import-sort";
import vue from "eslint-plugin-vue";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __rootdir = path.resolve(__dirname, "..", "..");
const __gitignore = path.resolve(__rootdir, ".gitignore");

export default tseslint.config(
  includeIgnoreFile(__gitignore),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...vue.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  {
    plugins: {
      "simple-import-sort": importsort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  prettier,
);
