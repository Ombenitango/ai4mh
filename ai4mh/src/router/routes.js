const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "/about-us", component: () => import("pages/AboutUsPage.vue") },
      {
        path: "/contant-us",
        component: () => import("pages/ContantUsPage.vue"),
      },
      {
        path: "/blog",
        component: () => import("pages/BlogOrNewsPage.vue"),
      },
      { path: "/blog/:id/:title", component: () => import("pages/ReadBlogPage.vue") },
      { path: "/team", component: () => import("pages/TeamPage.vue") },
      {
        path: "/publications/research",
        component: () => import("pages/ResearchPage.vue"),
      },
      {
        path: "/publications/books",
        component: () => import("pages/BooksPage.vue"),
      },
      {
        path: "/publications/journals",
        component: () => import("pages/JournalPage.vue"),
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
