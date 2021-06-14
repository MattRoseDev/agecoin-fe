import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isAuthenticated } from "@/utils";
import { PUBLIC_ROUTES } from "@/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      private: false
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Home/index.vue")
  },
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
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/index.vue")
  },
  {
    path: "/tasks",
    name: "Tasks",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "tasks" */ "../views/Tasks/index.vue")
  },
  {
    path: "/tasks/:taskId",
    name: "Task",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "task" */ "../views/Task/index.vue")
  },
  {
    path: "/tasks/:taskId/edit",
    name: "EditTask",
    meta: {
      private: true
    },
    component: () =>
      import(/* webpackChunkName: "editTask" */ "../views/EditTask/index.vue")
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
