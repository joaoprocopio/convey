<template>
  <component :is="RouterLayout" v-if="hasLayout">
    <RouterView />
  </component>
  <RouterView v-else />
  <VueQueryDevtools />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { VueQueryDevtools } from '~/lib/query/devtools'
import { useRouterLayout } from '~/lib/router/composables'

const route = useRoute()
const RouterLayout = useRouterLayout()

const hasLayout = computed<boolean>(() => Boolean(route.meta.layout))
</script>
