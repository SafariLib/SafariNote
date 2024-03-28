import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    define: { global: 'globalThis' },
    server: {
        port: 5750,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@store': path.resolve(__dirname, 'src/store'),
        },
    },
    plugins: [react()],
});
