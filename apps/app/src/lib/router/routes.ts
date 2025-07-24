import { h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import DefaultLayout from '~/layouts/default-layout'
import {
  InicioPageName,
  ProdutosPageName,
  PropostasPageName,
} from '~/lib/router/constants'

export const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: PropostasPageName,
    },
  },
  {
    path: '/',
    name: InicioPageName,
    meta: { layout: DefaultLayout },
    component: {
      render() {
        return h('div', undefined, InicioPageName)
      },
    },
  },
  {
    path: '/produtos',
    name: ProdutosPageName,
    meta: { layout: DefaultLayout },
    component: {
      render() {
        return h('div', undefined, ProdutosPageName)
      },
    },
  },
  {
    path: '/propostas',
    name: PropostasPageName,
    meta: { layout: DefaultLayout },
    component: () => import('~/propostas/propostas-page'),
  },
]
