import { createRouter, createWebHistory } from "vue-router";
import CoinInfo from "../pages/CoinInfo.vue";
import Portfolio from "../pages/Portfolio.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coin-info",
  },
  {
    path: "/coin-info",
    alias: "/",
    name: "CoinInfo",
    component: CoinInfo,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
