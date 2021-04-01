import Vue from "vue";
import Router from "vue-router";

import Layout from "@/layout";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "home",
    name: "Container",
    children: [
      {
        path: "home",
        component: () => import("@/views/Home"),
        name: "Home",
        meta: { title: "home", icon: "" },
      },
      {
        path: "TCCheckboxGroup",
        component: () => import("@/views/DemoTCCheckboxGroup"),
        name: "TCCheckboxGroup",
        meta: { title: "TCCheckboxGroup", icon: "" },
      },
      {
        path: "TCTable",
        component: () => import("@/views/DemoTCCheckboxGroup"),
        name: "TCTable",
        meta: { title: "home", icon: "" },
      },
      {
        path: "TCCheckboxGroup",
        component: () => import("@/views/DemoTCCheckboxGroup"),
        name: "TCCheckboxGroup",
        meta: { title: "home", icon: "" },
      },
      {
        path: "TCCheckboxGroup",
        component: () => import("@/views/DemoTCCheckboxGroup"),
        name: "TCCheckboxGroup",
        meta: { title: "home", icon: "" },
      },

      // {
      //   path: '/account',
      //   component: Account,
      //   name: 'Account',
      //   meta: { title: '账号资讯', icon: '', breadcrumb: 'add' },
      // },
    ],
    // hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/home", hidden: true },
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
