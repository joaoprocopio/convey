<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogTitle, type DialogTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DialogTitle
    data-slot="sheet-title"
    :class="cn('font-semibold text-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
