import { includeIgnoreFile } from "@eslint/compat";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginVitest from "@vitest/eslint-plugin";
import pluginPrettier from "@vue/eslint-config-prettier";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import importsort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __gitignore = path.resolve(__dirname, ".gitignore");

export default defineConfigWithVueTs(
  includeIgnoreFile(__gitignore),

  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  pluginQuery.configs["flat/recommended"],

  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
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

  pluginPrettier,
);
