import type { RouteRecordRaw } from "vue-router";

import DefaultLayout from "~/layouts/default-layout";

import {
  DeteccaoPageName,
  DeteccoesPageName,
  ProdutosPageName,
} from "./constants";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: DeteccoesPageName,
    component: () => import("~/pages/deteccoes-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/:id",
    name: DeteccaoPageName,
    component: () => import("~/pages/deteccao-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos",
    name: ProdutosPageName,
    component: () => import("~/pages/produtos-page"),
    meta: { layout: DefaultLayout },
  },
];
