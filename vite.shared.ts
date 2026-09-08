import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { type UserConfig } from 'vite';
import fullReload from 'vite-plugin-full-reload';
import fs from 'node:fs';

const packageJson = JSON.parse(
    fs.readFileSync('package.json', {
        encoding: 'utf-8'
    })
);

function getPackageField(field: 'version' | 'date'): string {
    return typeof packageJson[field] === 'string' ? packageJson[field] : '';
}

const config: UserConfig = {
    resolve: {
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.d.ts'],
        tsconfigPaths: true
    },
    // clear screen is needed for styles to be reloaded properly
    clearScreen: true,
    base: './',
    define: {
        global: {},
        __APP_VERSION__: JSON.stringify(getPackageField('version')),
        __APP_BUILD_DATE__: JSON.stringify(getPackageField('date'))
    },
    plugins: [
        react({}),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
            },
            typescript: true
        }),
        fullReload('./**/*', {
            root: import.meta.dirname,
            delay: 0,
            always: true
        })
    ],
    server: {
        host: true,
        hmr: {
            overlay: false
        },
        port: 3000,
        strictPort: true,
        open: true
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/setupTests.ts',
        mockReset: true,
        passWithNoTests: true,
        watch: false,
        coverage: {
            reporter: [
                [
                    'json',
                    {
                        file: 'coverage.json'
                    }
                ],
                ['html']
            ],
            reportsDirectory: 'coverage',
            provider: 'v8',
            enabled: true,
            clean: true,
            cleanOnRerun: true
        }
    },
    build: {
        outDir: 'build'
    }
};

export default config;
