import { h } from "vue";
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
    component: () => import("~/pages/produtos-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos/exemplo-1",
    name: ProdutosExemplo1PageName,
    component: {
      setup() {
        return () => h("div", null, [h("h1", null, "exemplo 1")]);
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos/exemplo-2",
    name: ProdutosExemplo2PageName,
    component: {
      setup() {
        return () => h("div", null, [h("h1", null, "exemplo 2")]);
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: "/produtos/exemplo-3",
    name: ProdutosExemplo3PageName,
    component: {
      setup() {
        return () => h("div", null, [h("h1", null, "exemplo 3")]);
      },
    },
    meta: { layout: DefaultLayout },
  },
];
