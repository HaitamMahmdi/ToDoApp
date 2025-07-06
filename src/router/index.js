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
    name: "index",
    path: "/index",
    component: () => import("../views/dashbord/index.vue"),
    children: [
      {
        path: "settings",
        name: "settings",
        component: () => import("../views/dashbord/SettingsView.vue"),
      },
      {
        path: "addTask",
        name: "addTask",
        component: () => import("../views/dashbord/AddTaskView.vue"),
      },
      {
        path: "tasks",
        name: "tasks",
        component: () => import("../views/dashbord/TasksView.vue"),
      },
    ],
  },
  {
    name: `faq`,
    path: `/faq`,
    component: () => import("@/views/FAQ.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
