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
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
