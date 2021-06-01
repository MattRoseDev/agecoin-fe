import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isAuthenticated } from "@/utils";
import { PUBLIC_ROUTES } from "@/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/index.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout/index.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile/index.vue")
  },
  {
    path: "/task/add",
    name: "AddTask",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "addTask" */ "../views/AddTask/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, _, next) => {
  const name = to.name as string;
  if (PUBLIC_ROUTES.includes(name) && isAuthenticated()) {
    next({ name: "Profile" });
  } else if (name !== "Login" && !isAuthenticated() && to.meta.private) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
