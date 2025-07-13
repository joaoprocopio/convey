import { createContext } from 'reka-ui'
import type { ComputedRef, Ref } from 'vue'

export const SIDEBAR_WIDTH = '16rem'
export const SIDEBAR_WIDTH_MOBILE = '18rem'
export const SIDEBAR_WIDTH_ICON = '3rem'

export const [useSidebar, provideSidebarContext] = createContext<{
  state: ComputedRef<'expanded' | 'collapsed'>
  open: Ref<boolean>
  isMobile: Ref<boolean>
  toggleSidebar: () => void
}>('Sidebar')
