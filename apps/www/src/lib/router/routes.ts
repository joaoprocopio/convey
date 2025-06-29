import { h } from "vue";
import type { RouteRecordRaw } from "vue-router";

import DefaultLayout from "~/layouts/default-layout";

import {
  AtracoesPageName,
  IngressoPageName,
  ShowPageName,
  ShowsPageName,
} from "./constants";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: ShowsPageName,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: ShowsPageName,
    },
  },
  {
    path: "/shows",
    name: ShowsPageName,
    component: () => import("~/pages/shows-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/shows/:id",
    name: ShowPageName,
    component: () => import("~/pages/show-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/atracoes",
    name: AtracoesPageName,
    component: {
      setup() {
        return () => h("div", null, [h("h1", null, "atracoes")]);
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: "/ingressos",
    name: IngressoPageName,
    component: {
      setup() {
        return () => h("div", null, [h("h1", null, "ingressos")]);
      },
    },
    meta: { layout: DefaultLayout },
  },
];
