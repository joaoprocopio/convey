<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { Separator } from '~/lib/shadcn/ui/separator'
import { cn } from '~/lib/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-slot="sidebar-separator"
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-sidebar-border', props.class)"
  >
    <slot />
  </Separator>
</template>
