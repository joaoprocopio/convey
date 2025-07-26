<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useStorage } from '@vueuse/core'
import {
  Ellipsis,
  ListCheck,
  ListFilter,
  ListRestart,
  Search,
  SlidersHorizontal,
} from 'lucide-vue-next'

import { Button } from '~/lib/shadcn/ui/button'
import { Input } from '~/lib/shadcn/ui/input'
import { SidebarTrigger, useSidebar } from '~/lib/shadcn/ui/sidebar'
import ListView from '~/pages/proposta-list-page/components/list-view.vue'
import { propostaQueries } from '~/queries/proposta'

const { open } = useSidebar()

const propostas = useQuery({
  ...propostaQueries.all(),
  refetchInterval: 15_000, // 15s
})

const viewConfig = useStorage<{
  type: 'list' | 'board'
}>(
  'view',
  {
    type: 'list',
  },
  localStorage,
)
</script>

<template>
  <div class="sticky top-0 z-20 bg-background/70 backdrop-blur-xl">
    <header class="flex h-header items-center gap-x-3 border-b px-6">
      <SidebarTrigger class="data-[open=true]:hidden" :data-open="open" />

      <div class="relative items-center">
        <Input type="text" placeholder="Encontrar" class="h-8 pl-9" />

        <span
          class="absolute inset-y-0 flex items-center justify-center px-2.5"
        >
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>

      <div class="ml-auto shrink-0">
        <div
          class="flex items-center gap-1.5 text-xs text-muted-foreground [&>svg]:size-5"
        >
          <template v-if="propostas.isFetching.value">
            <ListRestart />
            <span>Atualizando...</span>
          </template>

          <template
            v-if="!propostas.isFetching.value && propostas.isSuccess.value"
          >
            <ListCheck />
            <span>Tudo certo</span>
          </template>
        </div>
      </div>

      <Button class="ml-1.5" size="sm" variant="ghost">
        <Ellipsis class="size-5" />
      </Button>
    </header>

    <header class="flex h-header items-center gap-x-3 border-b px-6">
      <Button variant="ghost" size="sm">
        <ListFilter />
        <span>Filtrar</span>
      </Button>

      <Button class="ml-auto" variant="outline" size="sm">
        <SlidersHorizontal />
        <span>Visualização</span>
      </Button>
    </header>
  </div>

  <ListView v-if="viewConfig.type === 'list'" />
</template>
