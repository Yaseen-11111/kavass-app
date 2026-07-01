import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';


export default defineConfig(({ command }) => {
    return {
        // Only use the base path when running 'build', use '/' during 'dev'
        base: command === 'build' ? '/kavass-app/' : '/',

        plugins: [
            react(),
            tailwindcss(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            port: 8080,
            host: true,
        }
    };
});