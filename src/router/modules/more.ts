import Layout from "@/views/layout/the-layout.vue";

const moreRouter = {
  path: "/",
  component: Layout,
  meta: {
    title: "route.more",
    icon: "mdi-dots-horizontal",
    noCache: true,
    affix: true
  },
  children: [
    {
      path: "/about-us",
      component: () => import("@/views/components/about-us.vue"),
      name: "About",
      meta: { title: "route.moreComponents.about", icon: "mdi-translate" }
    },
    {
      path: "/contact-us",
      component: () => import("@/views/components/contact-us.vue"),
      name: "Contact",
      meta: { title: "route.moreComponents.contact", icon: "mdi-translate" }
    },
    {
      path: "/how-to",
      component: () => import("@/views/components/how-to.vue"),
      name: "HowtoUse",
      meta: {
        title: "route.moreComponents.HowtoUse",
        icon: "mdi-translate"
      }
    }
    // {
    //   path: "/latest-news",
    //   component: () => import("@/views/components/latest-news.vue"),
    //   name: "LatestNews",
    //   meta: {
    //     title: "route.moreComponents.latestNews",
    //     icon: "mdi-translate"
    //   }
    // }
  ]
};

export default moreRouter;
