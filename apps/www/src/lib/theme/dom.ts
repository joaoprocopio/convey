import type { TTHeme } from '~/lib/theme/constants'
import { Theme } from '~/lib/theme/constants'

export function applyTheme(theme: TTHeme, media: MediaQueryList) {
  const rootEl = document.documentElement

  rootEl.classList.remove(Theme.Light, Theme.Dark)

  if (theme === Theme.System) {
    const resolvedTheme = media.matches ? Theme.Dark : Theme.Light

    rootEl.classList.add(resolvedTheme)
  } else {
    rootEl.classList.add(theme)
  }
}
