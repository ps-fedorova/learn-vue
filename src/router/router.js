import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import AboutApp from "@/pages/AboutApp";
import PostPage from "@/pages/PostPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

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
  {
    path: "/store",
    component: PostPageWithStore
  },
  {
    path: "/composition",
    component: PostPageCompositionApi
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;