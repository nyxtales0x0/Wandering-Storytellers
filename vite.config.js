import { defineConfig } from 'vite'
import * as path from 'node:path'

console.log(path.resolve(__dirname));

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname)
        },
    },
})