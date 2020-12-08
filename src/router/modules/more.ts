/** When your routing table is too long, you can split it into small modules */

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
    // {
    //   path: "/product4",
    //   component: () => import("@/views/components/product4/index.vue"),
    //   title: "Test4",
    //   meta: {
    //     title: "Test4",
    //     icon: "mdi-timeline-text",
    //     noCache: true,
    //     affix: true
    //   }
    // },
    {
      path: "/disclaimer",
      component: () => import("@/views/components/disclaimer.vue"),
      title: "Discaimer",
      meta: {
        title: "Discaimer",
        icon: "mdi-timeline-text",
        noCache: true,
        affix: true
      }
    },
    {
      path: "/terms-and-conditions",
      component: () => import("@/views/components/terms-and-conditions.vue"),
      title: "Terms & Conditions ",
      meta: {
        title: "Terms & Conditions",
        icon: "mdi-timeline-text",
        noCache: true,
        affix: true
      }
    },
    {
      path: "/privacy-policy",
      component: () => import("@/views/components/privacy-policy.vue"),
      title: "Privacy Policy",
      meta: {
        title: "Privacy Policy",
        icon: "mdi-timeline-text",
        noCache: true,
        affix: true
      }
    },
    {
      path: "/settings",
      component: () => import("@/views/components/settings.vue"),
      title: "Settings.vue",
      meta: {
        title: "settings.vue",
        icon: "mdi-cog",
        noCache: true,
        affix: true
      }
    }
  ]
};

export default moreRouter;
