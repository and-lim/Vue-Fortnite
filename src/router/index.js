import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import { createRouter,createWebHistory } from 'vue-router'
const routes=[
{
    path:'/',
    component: Home
},
{
    path:'/about',
    component: About
}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;