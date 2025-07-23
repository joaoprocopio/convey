<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  MenubarRoot,
  type MenubarRootEmits,
  type MenubarRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/shadcn/utils'

const props = defineProps<
  MenubarRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<MenubarRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRoot
    data-slot="menubar"
    v-bind="forwarded"
    :class="
      cn(
        'flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>
