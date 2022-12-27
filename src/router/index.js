import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "@/views/loginView.vue";
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {requireAuth: true}

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {requireAuth: true}
  },
  {
    path: "/login",
    name: 'login',
    component: loginView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*Redireccionamiento en caso no este logeado*/
router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

    if(rutaProtegida && store.state.token === null){
        next({name: "login"})
    }else{
      next()
    }
})

export default router
