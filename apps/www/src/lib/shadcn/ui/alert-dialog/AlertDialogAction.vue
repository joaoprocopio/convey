<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction, type AlertDialogActionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { buttonVariants } from '~/lib/shadcn/ui/button'
import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  AlertDialogActionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
    :class="cn(buttonVariants(), props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>
