<template>
  <component :is="RouterLayout" v-if="hasLayout">
    <RouterView />
  </component>
  <RouterView v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useRouterLayout } from "~/lib/router/composables";

const route = useRoute();
const RouterLayout = useRouterLayout();

const hasLayout = computed<boolean>(() => Boolean(route.meta.layout));
</script>
