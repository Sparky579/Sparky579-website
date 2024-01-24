import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import Home from "../src/components/Home.vue"
import NotFound from "../src/components/NotFound.vue"
import Games from "../src/components/Games.vue"
import About from "../src/components/About.vue"
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Tools from "@/components/Tools.vue";
import Translate from "@/components/tools/Translate.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/game', component: Games},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/work', component: Tools},
    {path: '/tools/translate', component: Translate},
    {path: '/:pathMatch(.*)', component: NotFound}
]
const router = createRouter(
    {
        history: createWebHashHistory(import.meta.env.BASE_URL),
        routes,
    }
)
export default router;