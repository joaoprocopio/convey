import { h } from "vue";
import type { RouteRecordRaw } from "vue-router";

import DefaultLayout from "~/layouts/default-layout";

import { DeteccaoPageName, DeteccoesPageName } from "./constants";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: DeteccoesPageName,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: DeteccoesPageName,
    },
  },
  {
    path: "/shows",
    name: DeteccoesPageName,
    component: () => import("~/pages/deteccoes-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/shows/:id",
    name: DeteccaoPageName,
    component: () => import("~/pages/deteccao-page"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/atracoes",
    component: {
      setup() {
        return () => h("div", null, [h("h1", null, "exemplo 1")]);
      },
    },
  },
];
