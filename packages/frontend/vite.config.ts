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
            '@views': path.resolve(__dirname, 'src/views'),
            '@config': path.resolve(__dirname, 'src/config')
        },
    },
    plugins: [
        react(),
    ],
});