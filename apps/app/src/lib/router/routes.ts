import { useQueryClient } from '@tanstack/vue-query'
import { h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import DefaultLayout from '~/layouts/default-layout'
import {
  InicioPageName,
  ProdutoListPageName,
  PropostaDetailPageName,
  PropostaListPageName,
} from '~/lib/router/constants'
import { propostaQueries } from '~/queries/proposta'

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
    beforeEnter(_to, _from, next) {
      const queryClient = useQueryClient()
      queryClient.prefetchQuery(propostaQueries.all())
      next()
    },
    async component() {
      return await import('~/pages/proposta-list-page')
    },
  },
  {
    path: '/propostas/:id',
    name: PropostaDetailPageName,
    meta: { layout: DefaultLayout },
    async component() {
      return {
        render() {
          return h('div', undefined, PropostaDetailPageName)
        },
      }
    },
  },
]
