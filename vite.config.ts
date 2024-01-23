import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    proxy: {
      '/hcdmh': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/hcdmh/, '')
      }
    },
    historyApiFallback: true,  // 启用基于 HTML5 History API 的路由
  },

});
