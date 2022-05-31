import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/a3",
      name: "a3",
      component: () => import("@/views/A3View.vue"),
    },
    {
      path: "/a7",
      name: "a7",
      component: () => import("@/views/A7View.vue"),
    },
    {
      path: "/a8",
      name: "a8",
      component: () => import("@/views/A8View.vue"),
    },
    {
      path: "/sales",
      name: "sales",
      component: () => import("@/views/sales/SalesView.vue"),
    },
    {
      path: "/car",
      name: "car",
      component: () => import("@/views/CarView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("@/views/OrdersView.vue"),
    },
    {
      path: "/in-service",
      name: "in service",
      component: () => import("@/views/InServiceView.vue"),
    },
  ],
});

export default router;

const PUBLIC_PAGES = [
  "/",
  "/login",
  "/register",
  "/about",
  "/a3",
  "/a7",
  "/a8",
];

router.beforeEach((to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const authRequired = !PUBLIC_PAGES.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});
