import { createRouter, createWebHistory } from "vue-router";
import SignView from "../views/SignView.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "SignIn",
    path: "/SignView",
    component: SignView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
