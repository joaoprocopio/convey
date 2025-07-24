<script setup lang="ts">
import { PanelLeft } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'

import { Button } from '~/lib/shadcn/ui/button'
import { cn } from '~/lib/shadcn/utils'

import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('size-8 text-muted-foreground [&>svg]:!size-5', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
