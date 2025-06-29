<script setup lang="ts">
import type { ShowStatus, TShowStatus } from "~/data/show/models";

defineProps<{
  quantity: number;
  status: (typeof ShowStatus)[TShowStatus];
}>();
</script>

<template>
  <div
    class="sticky top-24 z-10 flex h-subheader items-center gap-4 bg-secondary/70 px-6 text-muted-foreground backdrop-blur-xl"
  >
    <component :is="status.icon" class="size-5" />
    <p class="text-sm text-foreground">{{ status.title }}</p>
    <p class="text-sm">
      {{ quantity }}
    </p>
  </div>
</template>
