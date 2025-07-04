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
    path: "/Dashboard",
    component: () => import("../views/dashbord/index.vue"),
    children: [
      {
        path: "/settings",
        name: "Settings",
        component: () => import("../views/dashbord/SettingsView.vue"),
      },
      {
        path: "/AddTask",
        name: "AddTask",
        component: () => import("../views/dashbord/AddTaskView.vue"),
      },
      {
        path: "/Tasks",
        name: "Tasks",
        component: () => import("../views/dashbord/TasksView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
