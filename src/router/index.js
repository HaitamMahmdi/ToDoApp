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
  {
    name: "dashboard",
    path: "/dashboard",
    component: () => import("../views/dashbord/index.vue"),
    children: [
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/dashbord/SettingsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
