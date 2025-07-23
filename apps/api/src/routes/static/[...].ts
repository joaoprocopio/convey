import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler((event) => {
  const { mimetype } = getQuery(event)

  return mimetype
})
