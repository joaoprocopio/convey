<script lang="ts" setup>
import { reactiveOmit } from '@vueuse/core'
import {
  CalendarHeadCell,
  type CalendarHeadCellProps,
  useForwardProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  CalendarHeadCellProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    data-slot="calendar-head-cell"
    :class="
      cn(
        'w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
