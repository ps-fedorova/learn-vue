import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import AboutApp from "@/pages/AboutApp";
import PostPage from "@/pages/PostPage";

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/posts",
        component: PostsPage
    },
    {
        path: "/about",
        component: AboutApp
    },
    {
        path: "/posts/:id",
        component: PostPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;