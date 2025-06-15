import { createRouter, createWebHistory } from "vue-router";
import SignView from "../views/SignView.vue";
import Home from "../views/Home.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/SignView",
    component: SignView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (to.meta.requiresAuth && !user) {
    next("/SignView");
  } else {
    next();
  }
});
export default router;
