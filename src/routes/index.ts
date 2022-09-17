import { Component, defineComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../pages/home";
import { ExampleRoutes } from "./example/exampleRoutes";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
];

const AppRoutes: RouteRecordRaw[] = [...routes, ...ExampleRoutes];

const AppRouter = createRouter({
  routes: AppRoutes,
  history: createWebHistory(),
});

export default AppRouter;
