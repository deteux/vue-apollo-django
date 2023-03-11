import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/HomeView.vue"),
    name: "home",
  },
  {
    path: "/blog",
    component: () => import("./views/BlogView.vue"),
    name: "blog",
  },
  {
    path: "/blog/post/:slug",
    component: () => import("./views/PostView.vue"),
    name: "post",
    props: true,
  },
  {
    path: "/photography",
    component: () => import("./views/PhotographyView.vue"),
    name: "photography",
  },
  {
    path: "/contact",
    component: () => import("./views/ContactView.vue"),
    name: "contact",
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/AboutView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
