<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel, type AlertDialogCancelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { buttonVariants } from '~/lib/shadcn/ui/button'
import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  AlertDialogCancelProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <AlertDialogCancel
    v-bind="delegatedProps"
    :class="
      cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', props.class)
    "
  >
    <slot />
  </AlertDialogCancel>
</template>
