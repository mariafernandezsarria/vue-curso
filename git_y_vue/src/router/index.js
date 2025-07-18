import { createRouter, createWebHistory } from 'vue-router'
import Home  from "../components/Home.vue"
import Personajes from "../components/todospersonajes.vue"
import Personaje from "../components/personaje.vue"
import Episodios from '@/components/episodios.vue';
import characters from '../components/characters.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/personajes",
            name: "personajes",
            component: Personajes
        },
        {
            path: "/personaje/:id",
            name: "personaje",
            component: Personaje
        },
        {
            path: "/episodios",
            name: "episodios",
            component: Episodios
        },
        {
            path: "/episodio/:id",
            name: "episodio",
            component: characters
        }
    ]
})

export default router;