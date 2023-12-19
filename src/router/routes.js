import { useRoute } from "vue-router";

const router = useRoute();

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: "login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../pages/LoginPage.vue"),
      },
      {
        path: "home",
        name: "home",
        component: () => import("../pages/HomePage.vue"),
        children: [
          {
            path: "discover",
            name: "discover",
            component: () => import("../pages/DiscoverPage.vue"),
          },
          {
            path: "categories",
            name: "categories",
            component: () => import("../pages/CategoryPage.vue"),
          },
          {
            path: "create",
            name: "create",
            component: () => import("../pages/RecipeForm.vue"),
          },
          {
            path: "recent",
            name: "recent",
            component: () => import("../pages/RecentPosts.vue"),
          },
          {
            path: "recipe/:id",
            name: "recipe",
            component: () => import("../pages/RecipePage.vue"),
          },
          {
            path: "search",
            name: "search",
            component: () => import("../pages/SearchPage.vue"),
            props: (router) => ({ query: router.query.q }),
          },
        ],
      },
    ],
  },
  // tambak lang muna to rito

  {
    path: "/register",
    name: "register",
    component: () => import("../pages/RegisterPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
