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
      meta: { title: "route.about", icon: "mdi-translate" }
    },
    {
      path: "/contact-us",
      component: () => import("@/views/components/contact-us.vue"),
      name: "Contact",
      meta: { title: "route.contact", icon: "mdi-translate" }
    },
    {
      path: "/how-to",
      component: () => import("@/views/components/how-to.vue"),
      name: "HowtoUse",
      meta: {
        title: "route.HowtoUse",
        icon: "mdi-translate"
      }
    },
    {
      path: "/latest-news",
      component: () => import("@/views/components/latest-news.vue"),
      name: "LatestNews",
      meta: {
        title: "route.latestNews",
        icon: "mdi-translate"
      }
    },
    {
      path: "/product4",
      component: () => import("@/views/components/product4/index.vue"),
      title: "Test4",
      meta: {
        title: "Test4",
        icon: "mdi-timeline-text",
        noCache: true,
        affix: true
      }
    }

  ]
};

export default moreRouter;
