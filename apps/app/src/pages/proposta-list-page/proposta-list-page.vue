<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ListCheck, ListRestart } from 'lucide-vue-next'

import { SidebarTrigger, useSidebar } from '~/lib/shadcn/ui/sidebar'
import { propostaQueries } from '~/queries/proposta'

const { open } = useSidebar()

const propostas = useQuery({
  ...propostaQueries.all(),
  refetchInterval: 5 * 1000,
})
</script>

<template>
  <Teleport to="#sidebar-header" defer>
    <header class="flex h-header items-center gap-x-2 border-b px-6">
      <SidebarTrigger class="data-[open=true]:hidden" :data-open="open" />
      <h1 class="text-sm">Detecções</h1>
      <span
        class="inline-flex aspect-[3.33/4] items-center justify-center rounded-sm bg-muted px-1 text-2xs font-medium"
      >
        5
      </span>

      <div
        class="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground [&>svg]:size-5"
      >
        <template v-if="propostas.isFetching.value">
          <ListRestart />
          <span>Atualizando...</span>
        </template>
        <template v-else-if="propostas.isSuccess.value">
          <ListCheck />
          <span>Tudo certo</span>
        </template>
      </div>
    </header>
  </Teleport>

  <pre>
    {{ propostas }}
  </pre>
</template>
