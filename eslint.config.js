import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import stylisticPlugin from '@stylistic/eslint-plugin-ts';
import vueEslintParser from 'vue-eslint-parser';

export default [
    {
        files: ['**/*.{ts,vue}'],  // For TypeScript and Vue files
        ignores: ['dist', '.nuxt'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: vueEslintParser,  // Use vue-eslint-parser to handle Vue files
            parserOptions: {
                parser: '@typescript-eslint/parser',  // Use TypeScript parser for <script> blocks
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            vue: vuePlugin,
            '@typescript-eslint': tsPlugin,
            '@stylistic': stylisticPlugin,
        },
        rules: {
            ...vuePlugin.configs['vue3-recommended'].rules, // Use Vue 3 recommended rules
            'vue/multi-word-component-names': 'off',
            'object-curly-newline': 'off',
            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return',
                },
            ],
            'no-whitespace-before-property': 'error',
            '@stylistic/indent': [
                'error',
                'tab',
                {
                    SwitchCase: 1,
                    FunctionExpression: {
                        parameters: 1,
                        body: 1,
                    },
                    MemberExpression: 1,
                    offsetTernaryExpressions: true,
                },
            ],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/space-in-parens': 'off',
            '@stylistic/array-bracket-spacing': 'off',
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/computed-property-spacing': 'off',
            '@stylistic/space-before-function-paren': 'off',
            '@stylistic/no-nested-ternary': 'off',
            '@stylistic/space-unary-ops': 'off',
            '@stylistic/semi': ['warn', 'always'],
            '@stylistic/brace-style': [
                'warn',
                'stroustrup',
                {
                    allowSingleLine: false,
                },
            ],
            'max-len': [
                'warn',
                {
                    comments: 160,
                    code: 160,
                    tabWidth: 4,
                },
            ],
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 2,
                    maxEOF: 1,
                    maxBOF: 0,
                },
            ],
            'block-spacing': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
];
