import Vue from "vue";
import ViewRouter from "vue-router";

import Home from "../views/Home.vue";
Vue.use(ViewRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("../views/Chart.vue"),
  },
];

const router = new ViewRouter({
  routes,
  mode: "history",
});

export default router;
