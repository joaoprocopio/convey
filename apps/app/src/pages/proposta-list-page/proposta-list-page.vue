<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ListCheck, ListRestart, Search } from 'lucide-vue-next'

import { Input } from '~/lib/shadcn/ui/input'
import { SidebarTrigger, useSidebar } from '~/lib/shadcn/ui/sidebar'
import { propostaQueries } from '~/queries/proposta'

const { open } = useSidebar()

const propostas = useQuery({
  ...propostaQueries.all(),
  refetchInterval: 15 * 1000,
})
</script>

<template>
  <Teleport to="#sidebar-header" defer>
    <header class="flex items-center gap-x-3 border-b px-6 py-2.5">
      <SidebarTrigger class="data-[open=true]:hidden" :data-open="open" />

      <div class="relative items-center">
        <Input type="text" placeholder="Encontrar" class="pl-9" />

        <span
          class="absolute inset-y-0 flex items-center justify-center px-2.5"
        >
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>

      <div
        class="ml-auto flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground [&>svg]:size-5"
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
    </header>
  </Teleport>

  <pre>
    {{ propostas }}
  </pre>
</template>
