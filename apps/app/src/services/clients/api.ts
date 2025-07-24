import { createFetch } from 'ofetch'

import { env } from '~/env'

export const fetchAPI = createFetch({
  defaults: {
    baseURL: env.API_URL,
    retry: 0,
  },
})
