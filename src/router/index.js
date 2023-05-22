import { createRouter, createWebHistory } from "vue-router";
import Content from "../views/Content.vue";
import ContentA from "../views/ContentA.vue";
import ContentB from "../views/ContentB.vue";
import ContentC from "../views/ContentC.vue";
import ContentD from "../views/ContentD.vue";
import ContentE from "../views/ContentE.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Content,
    },
    {
      path: "/ContentA",
      name: "ContentA",
      component: ContentA,
    },
    {
      path: "/ContentB",
      name: "ContentB",
      component: ContentB,
    },
    {
      path: "/ContentC",
      name: "ContentC",
      component: ContentC,
    },
    {
      path: "/ContentD",
      name: "ContentD",
      component: ContentD,
    },
    {
      path: "/ContentE",
      name: "ContentE",
      component: ContentE,
    },
  ],
});

export default router;
