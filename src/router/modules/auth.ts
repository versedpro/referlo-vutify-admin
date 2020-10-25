/** When your routing table is too long, you can split it into small modules */

const authRouter = [
  {
    path: "/login",
    alias: "/login",
    component: () => import("@/views/auth/login.vue"),
    hidden: true
  },
  {
    path: "/register",
    alias: "/registration",
    component: () => import("@/views/auth/register.vue"),
    hidden: true
  }
];

export default authRouter;
