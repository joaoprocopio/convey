import { defineEventHandler, getRequestURL } from 'h3'

import { makeProposta } from '~/data/maker'
import { array } from '~/utils/array'
import { randomInt } from '~/utils/random'

export default defineEventHandler((event) => {
  const url = getRequestURL(event)

  return array(randomInt(5, 25)).map(() => makeProposta(url))
})
