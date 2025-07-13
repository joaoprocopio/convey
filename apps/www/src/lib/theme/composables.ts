import { inject } from 'vue'

import { themeKey } from '~/lib/theme/plugin'

export function useTheme() {
  const theme = inject(themeKey)

  return theme
}
