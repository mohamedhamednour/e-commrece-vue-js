import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EcommereBy from "../views/EcommerByid.vue";
import AddCardBy from "../views/AddCard.vue";

import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/page/:id", name: "ecmmerebyid", component: EcommereBy },
  { path: "/card", name: "cardbyid", component: AddCardBy },

  {
    path: "/sign-in",
    name: "sign",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "signup",
    component: SignUp,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
