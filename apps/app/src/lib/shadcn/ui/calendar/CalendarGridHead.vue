<script lang="ts" setup>
import { CalendarGridHead, type CalendarGridHeadProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  CalendarGridHeadProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
  <CalendarGridHead data-slot="calendar-grid-head" v-bind="props">
    <slot />
  </CalendarGridHead>
</template>
