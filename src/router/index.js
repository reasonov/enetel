import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/views/Home";
import Ranking from "@/views/Ranking";
import Tariff from "@/views/Tariff";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/ranking',
        component: Ranking,
        name: 'Ranking'
    },
    {
        path: '/tariff',
        component: Tariff,
        name: 'Tariff'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
