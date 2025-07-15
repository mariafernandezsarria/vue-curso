import { createRouter, createWebHistory } from 'vue-router'
import Home  from "../components/Home.vue"
import Personaje from "../components/personaje.vue"

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/personaje",
            name: "personaje",
            component: Personaje
        }
    ]
})

export default router;