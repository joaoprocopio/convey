import { type FunctionPlugin, watch } from 'vue'

import { useTheme } from '~/lib/theme/composables'
import { PrefersDarkColorScheme } from '~/lib/theme/constants'
import { applyTheme } from '~/lib/theme/dom'

export const theme: FunctionPlugin = async () => {
  const theme = useTheme()
  const media = window.matchMedia(PrefersDarkColorScheme)

  watch(theme, (nextTheme) => applyTheme(nextTheme, media), {
    immediate: true,
  })

  media.addEventListener('change', () => applyTheme(theme.value, media))
}
