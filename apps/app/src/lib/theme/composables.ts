import { useStorage } from '@vueuse/core'

import type { TTHeme } from '~/lib/theme/constants'
import { Theme } from '~/lib/theme/constants'
import { cookieStorage } from '~/lib/vueuse/cookie-storage'

export function useTheme() {
  const theme = useStorage<TTHeme>('theme', Theme.System, cookieStorage)

  return theme
}
