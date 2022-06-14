import { createWebHistory, createRouter } from "vue-router";
import Home from "Views/Home.vue";

const { VITE_BACKEND_URL } = import.meta.env;
const NotFound = () => import("Views/NotFound.vue");
const OriginUrl = () => import("Views/OriginUrl.vue");

let OriginUrlProps = {};

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/:shortUrl(\\w{7}[+]$)",
    name: "OriginUrl",
    beforeEnter: async (to, from, next) => {
      let response = await fetch(`${VITE_BACKEND_URL}${to.path}`);
      if (response.ok) {
        let json = await response.json();
        OriginUrlProps = json;
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
    props: OriginUrlProps,
    component: OriginUrl,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
