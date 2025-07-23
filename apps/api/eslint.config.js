// @ts-check
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import pluginPrettier from '@vue/eslint-config-prettier'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import { dirname, resolve } from 'path'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const exec = fileURLToPath(import.meta.url)
const root = dirname(exec)
const gitignore = resolve(root, '.gitignore')

export default tseslint.config(
  includeIgnoreFile(gitignore),
  eslint.configs.recommended,
  tseslint.configs.strict,
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
