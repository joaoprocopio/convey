<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarFallback, type AvatarFallbackProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  AvatarFallbackProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="delegatedProps"
    :class="
      cn(
        'flex size-full items-center justify-center rounded-full bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </AvatarFallback>
</template>
