import { createRouter, createWebHistory } from "vue-router";
import CoinInfo from "../views/CoinInfo.vue";
import Portfolio from "../views/Portfolio.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
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
