import type { RouteRecordRaw } from "vue-router";

import DefaultLayout from "~/layouts/default-layout";

import {
  DeteccaoPageName,
  DeteccoesPageName,
  ProdutosExemplo1PageName,
  ProdutosExemplo2PageName,
  ProdutosExemplo3PageName,
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
    component: () => import("~/pages/deteccoes-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos/exemplo-1",
    name: ProdutosExemplo1PageName,
    component: () => import("~/pages/deteccoes-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos/exemplo-2",
    name: ProdutosExemplo2PageName,
    component: () => import("~/pages/deteccoes-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos/exemplo-3",
    name: ProdutosExemplo3PageName,
    component: () => import("~/pages/deteccoes-page"),
    meta: { layout: DefaultLayout },
  },
];
