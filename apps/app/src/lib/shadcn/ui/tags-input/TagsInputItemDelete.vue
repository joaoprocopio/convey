<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { X } from 'lucide-vue-next'
import {
  TagsInputItemDelete,
  type TagsInputItemDeleteProps,
  useForwardProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwardedProps"
    :class="cn('mr-1 flex rounded bg-transparent', props.class)"
  >
    <slot>
      <X class="h-4 w-4" />
    </slot>
  </TagsInputItemDelete>
</template>
