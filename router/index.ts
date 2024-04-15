import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import Home from "../src/components/Home.vue"
import NotFound from "../src/components/NotFound.vue"
import Games from "../src/components/Games.vue"
import About from "../src/components/About.vue"
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Tools from "@/components/Tools.vue";
import Translate from "@/components/tools/Translate.vue";
import Board from "@/components/tools/Board.vue";
import Ntw_game from "@/components/games/ntw_game.vue";
import Question from "@/components/tools/Question.vue";
import Gpt from "@/components/tools/Gpt.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/ntw_game', component: Ntw_game},
    {path: '/game', component: Games},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/work', component: Tools},
    {path: '/tools/translate', component: Translate},
    {path: '/tools/message', component: Board},
    {path: '/tools/question', component: Question},
    {path: '/tools/gpt', component: Gpt},
    {path: '/:pathMatch(.*)', component: NotFound},
]
const router = createRouter(
    {
        history: createWebHashHistory(import.meta.env.BASE_URL),
        routes,
    }
)
router.afterEach((to, from) => {

})
export default router;