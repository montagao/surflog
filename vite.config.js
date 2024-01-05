import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    // use different port
    server: {
        port: 4040,
    },

    publicDir: 'public',

    plugins: [svelte()],
})
