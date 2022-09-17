import {defineConfig} from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [
        tsConfigPaths(),
        vueJsx()
    ]
})