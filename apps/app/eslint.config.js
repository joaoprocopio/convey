import { includeIgnoreFile } from '@eslint/compat'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPrettier from '@vue/eslint-config-prettier'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const exec = fileURLToPath(import.meta.url)
const root = dirname(exec)
const gitignore = resolve(root, '.gitignore')

export default defineConfigWithVueTs(
  includeIgnoreFile(gitignore),

  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  pluginQuery.configs['flat/recommended'],

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    plugins: {
      'simple-import-sort': pluginImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  pluginPrettier,
)
