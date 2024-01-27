import '../src/assets/main.css'
import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '../router/index'
import { pinia } from "@/components/Cookie.vue";

const app = createApp(App)

app.use(router)

app.use(pinia)

app.mount('#app')
