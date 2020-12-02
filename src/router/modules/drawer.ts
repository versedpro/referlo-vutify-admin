import Layout from "@/views/layout/the-layout.vue";

const authRouter = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/latest-news",
        alias: "/",
        component: () => import("@/views/components/latest-news.vue"),
        name: "LatestNews",
        meta: {
          title: "route.latestNews",
          icon: "mdi-translate",
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        alias: "/",
        component: () => import("@/views/components/home/index.vue"),
        name: "Home",
        meta: {
          title: "route.home",
          icon: "mdi-home",
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/products",
        component: () => import("@/views/components/products/index.vue"),
        name: "Product1",
        meta: {
          title: "route.products",
          icon: "mdi-tag",
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/history",
        component: () => import("@/views/components/history/index.vue"),
        name: "History",
        meta: {
          title: "route.history",
          icon: "mdi-database",
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/profile",
        component: () => import("@/views/components/profile/index.vue"),
        name: "Profile",
        meta: { title: "route.profile", icon: "mdi-account" }
      }
    ]
  }
];

export default authRouter;
