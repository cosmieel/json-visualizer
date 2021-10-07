import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/stringpaste",
    name: "TextareaPage",
    component: () => import("../pages/TextareaPage.vue"),
  },
  {
    path: "/linkpaste",
    name: "InputPage",
    component: () => import("../pages/InputPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
