import { defineConfig } from 'vite';
import shared from './vite.shared.ts';

// https://vitejs.dev/config/
export default defineConfig(async () => {
    return shared;
});
