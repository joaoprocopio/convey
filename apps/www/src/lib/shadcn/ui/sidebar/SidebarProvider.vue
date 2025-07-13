<script setup lang="ts">
import { useMediaQuery, useStorage } from '@vueuse/core'
import { TooltipProvider } from 'reka-ui'
import { computed, type HTMLAttributes, type ModelRef } from 'vue'

import { cn } from '~/lib/shadcn/utils'
import { cookieStorage } from '~/lib/vueuse/cookie-storage'

import {
  provideSidebarContext,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
} from './utils'

const props = withDefaults(
  defineProps<{
    defaultOpen?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    defaultOpen: true,
    open: undefined,
  },
)

const isMobile = useMediaQuery('(max-width: 768px)')

const __INTERNAL_COOKIE_OPEN__ = useStorage(
  SIDEBAR_COOKIE_NAME,
  props.defaultOpen,
  cookieStorage,
)

const open = defineModel<boolean>('open', {
  get() {
    return __INTERNAL_COOKIE_OPEN__.value
  },
  set(value) {
    __INTERNAL_COOKIE_OPEN__.value = value
  },
}) as ModelRef<boolean, string, boolean, boolean>

// Helper to toggle the sidebar.
function toggleSidebar() {
  open.value = !open.value
}

// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
const state = computed(() => (open.value ? 'expanded' : 'collapsed'))

provideSidebarContext({
  state,
  open,
  isMobile,
  toggleSidebar,
})
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      data-slot="sidebar-wrapper"
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH,
        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
      }"
      :class="
        cn(
          'group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar',
          props.class,
        )
      "
      v-bind="$attrs"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
