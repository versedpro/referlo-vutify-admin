import Vue from "vue";
import Router from "vue-router";

import Layout from "@/views/layout/the-layout.vue";

/* Router Modules */
import authRouter from "./modules/auth";

Vue.use(Router);

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 */

/**
 * hidden: true        y
 *            if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its
 *                                child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    [expected] noCache: true     if true, the page will no be cached(default is false)
    [expected] breadcrumb: false if false, the item will hidden in breadcrumb(default is true)
    [expected] affix: true       if true, the tag will affix in the tags-view
  }
 */

export const constantRoutes = [
  {
    path: "/landing",
    alias: "/land",
    component: () => import("@/views/auth/landing.vue"),
    hidden: true
  },
  {
    path: "/follow-up/chat",
    alias: "/chat",
    component: () => import("@/views/components/chat.vue"),
    hidden: true
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
        path: "/history",
        component: () => import("@/views/components/history/index.vue"),
        name: "History",
        meta: {
          title: "route.history",
          icon: "mdi-near-me",
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
        name: "Products",
        meta: {
          title: "route.products",
          icon: "mdi-timeline-text",
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
        path: "/product1",
        component: () => import("@/views/components/product1.vue"),
        name: "Product1",
        meta: {
          title: "route.industries",
          icon: "mdi-timeline-text",
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
        path: "/follow-up",
        component: () => import("@/views/components/follow-up.vue"),
        name: "FollowUp",
        meta: { title: "route.followUp", icon: "mdi-palette" }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/chat",
        component: () => import("@/views/components/chat.vue"),
        name: "Chat",
        meta: {
          title: "route.followUp",
          icon: "mdi-palette",
          hidden: true
        }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/referal",
        component: () => import("@/views/components/Referal.vue"),
        name: "Referal",
        meta: {
          title: "route.referal",
          icon: "mdi-text-subject",
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
        meta: { title: "route.profile", icon: "mdi-translate" }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/profile2",
        component: () => import("@/views/components/profile2.vue"),
        name: "Profile",
        meta: { title: "route.profile", icon: "mdi-translate" }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/points",
        component: () => import("@/views/components/points/index.vue"),
        name: "Profile",
        meta: { title: "route.profile", icon: "mdi-translate" }
      }
    ]
  },
  // {
  //   path: "/",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/products",
  //       component: () => import("@/views/components/products/index.vue"),
  //       name: "Products",
  //       meta: { title: "route.products", icon: "mdi-translate" }
  //     }
  //   ]
  // },

  ...authRouter
];

export default new Router({
  // mode: 'history', // gh-pages
  //scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export const asyncRoutes = [
  /** When your routing table is too long, you can split it into small modules */
  { path: "*", redirect: "/error/404", hidden: true }
];
