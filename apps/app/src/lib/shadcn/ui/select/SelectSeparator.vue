<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectSeparator, type SelectSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  SelectSeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    v-bind="delegatedProps"
    :class="cn('pointer-events-none -mx-1 my-1 h-px bg-border', props.class)"
  />
</template>
