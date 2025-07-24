import { defineEventHandler, getRequestURL, sendRedirect } from 'h3'
import path from 'path'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const ext = path.extname(url.pathname)

  await sendRedirect(event, `${url.origin}/example${ext}`)
})
