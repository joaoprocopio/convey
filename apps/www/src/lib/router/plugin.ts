import { createRouter, createWebHistory } from 'vue-router'

import { env } from '~/env'

import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(env.BASE_URL),
  routes: routes,
})
