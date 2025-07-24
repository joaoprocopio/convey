import { h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import DefaultLayout from '~/layouts/default-layout'
import {
  InicioPageName,
  ProdutoListPageName,
  PropostaListPageName,
} from '~/lib/router/constants'

export const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: PropostaListPageName,
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
    name: ProdutoListPageName,
    meta: { layout: DefaultLayout },
    component: {
      render() {
        return h('div', undefined, ProdutoListPageName)
      },
    },
  },
  {
    path: '/propostas',
    name: PropostaListPageName,
    meta: { layout: DefaultLayout },
    component: () => import('~/pages/proposta-list-page'),
  },
]
