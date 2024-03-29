import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/RegisterView.vue";
import DetailsView from "@/views/TaskDetails.vue";
import auth from "../store/modules/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requireAuth: true },
  },
  {
    path: "/details/:id",
    name: "TaskDetails",
    component: DetailsView,
    meta: { requireAuth: true },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/register",
    name: "register",
    component: registerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*Redireccionamiento en caso no este logeado*/
router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some((record) => record.meta.requireAuth);

  if (rutaProtegida && auth.state.token === null) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
