import { h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import DefaultLayout from '~/layouts/default-layout'
import {
  FinanceiroPageName,
  InicioPageName,
  PedidosPageName,
  ProdutosPageName,
  PropostasPageName,
  UnidadesPageName,
} from '~/lib/router/constants'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: InicioPageName,
    component: {
      setup() {
        return () => h('div', null, [h('h1', null, InicioPageName)])
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: '/financeiro',
    name: FinanceiroPageName,
    component: {
      setup() {
        return () => h('div', null, [h('h1', null, FinanceiroPageName)])
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: '/pedidos',
    name: PedidosPageName,
    component: {
      setup() {
        return () => h('div', null, [h('h1', null, PedidosPageName)])
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: '/produtos',
    name: ProdutosPageName,
    component: {
      setup() {
        return () => h('div', null, [h('h1', null, ProdutosPageName)])
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: '/propostas',
    name: PropostasPageName,
    component: {
      setup() {
        return () => h('div', null, [h('h1', null, PropostasPageName)])
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: '/unidades',
    name: UnidadesPageName,
    component: {
      setup() {
        return () => h('div', null, [h('h1', null, UnidadesPageName)])
      },
    },
    meta: { layout: DefaultLayout },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: InicioPageName,
    },
  },
]
