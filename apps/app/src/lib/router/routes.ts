import type { RouteRecordRaw } from 'vue-router'

import DefaultLayout from '~/layouts/default-layout'
import { PropostasPageName } from '~/lib/router/constants'

export const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: PropostasPageName,
    },
  },
  {
    path: '/propostas',
    name: PropostasPageName,
    component: () => import('~/propostas/propostas-page'),
    meta: { layout: DefaultLayout },
  },
]
