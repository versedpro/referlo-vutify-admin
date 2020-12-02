/** When your routing table is too long, you can split it into small modules */

import Layout from "@/views/layout/the-layout.vue";

const moreRouter = {
  path: "/",
  component: Layout,
  meta: {
    title: "Main",
    icon: "mdi-dots-horizontal",
    noCache: true,
    affix: true
  },
  children: [
    {
      path: "/member-zone",
      component: () => import("@/views/components/member-zone.vue"),
      name: "MemberZone",
      meta: { title: "Member Zone", icon: "mdi-translate" }
    },
    {
      path: "/how-to-redeem",
      component: () => import("@/views/components/how-to-redeem.vue"),
      name: "HowToRedeem",
      meta: {
        title: "HowToRedeem",
        icon: "mdi-translate"
      }
    }
  ]
};

export default moreRouter;
