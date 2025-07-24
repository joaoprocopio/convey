<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ListCheck } from 'lucide-vue-next'

import { SidebarTrigger, useSidebar } from '~/lib/shadcn/ui/sidebar'
import { propostaQueries } from '~/queries/proposta'

const { open } = useSidebar()
const propostas = useQuery(propostaQueries.all())
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
        class="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground"
      >
        <ListCheck class="size-5" />
        <span>Tudo certo</span>
      </div>
    </header>
  </Teleport>

  <pre>

    {{ propostas }}
  </pre>
</template>
