import { defineEventHandler, getQuery } from 'h3'

import { TMimeType } from '~/data/schemas'

export default defineEventHandler((event) => {
  const { mimetype } = getQuery<{
    mimetype: TMimeType
  }>(event)

  return mimetype
})
