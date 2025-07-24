import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import { VueQueryPlugin as __query } from '@tanstack/vue-query'
import type { FunctionPlugin } from 'vue'

import { queryClient } from './client'

export const query: FunctionPlugin = (app) => {
  const config: VueQueryPluginOptions = {
    queryClient: queryClient,
  }

  app.use(__query, config)
}
