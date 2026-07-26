import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        ignores: ['node_modules/**', 'dist/**', 'build/**', 'scripts/**']
    },
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2020
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-undef': 'off',
            '@typescript-eslint/no-empty-object-type': [
                2,
                {
                    allowObjectTypes: 'always'
                }
            ],
            '@typescript-eslint/consistent-type-imports': [
                2,
                {
                    fixStyle: 'separate-type-imports'
                }
            ],
            '@typescript-eslint/no-restricted-imports': [
                2,
                {
                    paths: [
                        {
                            name: 'react-redux',
                            importNames: ['useSelector', 'useStore', 'useDispatch'],
                            message: 'Please use pre-typed versions from `src/app/hooks.ts` instead.'
                        }
                    ]
                }
            ]
        }
    },
    {
        files: ['**/*{test,spec}.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.jest
            }
        }
    },
    prettierConfig
];
