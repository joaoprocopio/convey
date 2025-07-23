import { defineEventHandler, getRequestURL } from 'h3'
import path from 'path'

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const ext = path.extname(url.pathname).replace('.', '')

  return ext
})
