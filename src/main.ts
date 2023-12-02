import './assets/main.css'
import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '../router/index' // 假设你的路由文件位于当前目录下，并且是 router.js 或 index.js

const app = createApp(App) // 将 App.vue 作为根组件传递给 createApp

app.use(router)

app.mount('#app')
