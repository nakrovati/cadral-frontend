import { createWebHistory, createRouter } from "vue-router";
import Home from "Views/HomePage.vue";

const { VITE_BACKEND_URL } = import.meta.env;
const NotFound = () => import("Views/NotFoundPage.vue");
const OriginUrl = () => import("Views/OriginUrlPage.vue");

let OriginUrlProps = {};

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/:shortUrl(\\w{7}[+]$)",
    name: "OriginUrl",
    beforeEnter: async (to, from, next) => {
      try {
        const response = await fetch(
          `${VITE_BACKEND_URL}/urls${to.path.slice(0, -1)}`
        );

        if (response.ok) {
          const json = await response.json();
          OriginUrlProps = json;
          next();
        } else {
          next({ name: "NotFound" });
        }
      } catch (error) {
        console.error(error);
      }
    },
    props: () => OriginUrlProps,
    component: OriginUrl,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
