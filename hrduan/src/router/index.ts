import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../pages/Login/index.vue"
import Enroll from '../pages/enroll/index.vue'
import Home from '../pages/home/index.vue'
import HomePerson from '../pages/home/person.vue'
import HomeCompany from '../pages/home/company.vue'
import PublishPost from '../pages/publishPost/index.vue'
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/enroll",
        component: Enroll
    },
    {
        path: "/home/",
        component: Home,
        redirect: "/home/person",
        children: [
            {
                name: "company",
                path: "company/:companyName",
                component: HomeCompany

            },
            {
                name: "person",
                path: "person",
                component: HomePerson
            }
        ]
    },
    {
        path: "/publishpost",
        component: PublishPost

    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
