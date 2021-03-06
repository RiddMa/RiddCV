import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import goTo from "vuetify/lib/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "Project",
    component: () => import(/* webpackChunkName: "project" */ "../views/Project.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/print",
    name: "Print",
    component: () => import(/* webpackChunkName: "project" */ "../views/CVPrint.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
