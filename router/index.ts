import {createRouter, createWebHistory} from "vue-router"
import Home from "../src/components/Home.vue"
import NotFound from "../src/components/NotFound.vue"
import Games from "../src/components/Games.vue"
import About from "../src/components/About.vue"
const routes = [
    { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/game', component: Games},
  {path: '/:pathMatch(.*)', component: NotFound}
]
const router = createRouter(
    {
       history: createWebHistory(),
       routes,
    }
)
export default router;