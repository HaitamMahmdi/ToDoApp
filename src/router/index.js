import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/AuthStore";
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
    meta: { requiresAuth: true },
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
      {
        name: `faqs`,
        path: `faqs`,
        component: () => import("@/views/FAQ.vue"),
      },
      {
        name: `contactUs`,
        path: `contactUs`,
        component: () => import("@/views/dashbord/ContactUsView.vue"),
      },
      {
        name: `aboutUs`,
        path: `/aboutUs`,
        component: () => import("@/views/AboutUs.vue"),
      },
    ],
  },
  {
    name: `faq`,
    path: `/faq`,
    component: () => import("@/views/FAQ.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: " dark:bg-on-surface bg-light-secondary",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  await authStore.checkAuth();
  const isLoggedIn = !!authStore.user;

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const guestOnly = to.matched.some((record) => record.meta.guestOnly);

  if (requiresAuth && !isLoggedIn) {
    next("/SignView");
  } else if (guestOnly && isLoggedIn) {
    next("/index");
  } else {
    next();
  }
});
export default router;
