import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-oxc';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    root: process.cwd(),
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
        host: true
    }
});