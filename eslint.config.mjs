import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = defineConfig([
	js.configs.recommended,
	tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2022
			},
			ecmaVersion: 2022,
			sourceType: "module"
		},
		plugins: {
			"simple-import-sort": simpleImportSort
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error"
		}
	}
]);

export default eslintConfig;
