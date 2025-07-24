<script setup lang="ts">
import {
  CircleCheckBig,
  CircleDashed,
  GalleryVerticalEnd,
  ListCheck,
  RefreshCw,
} from 'lucide-vue-next'

import { Button } from '~/lib/shadcn/ui/button'
import { SidebarTrigger, useSidebar } from '~/lib/shadcn/ui/sidebar'

const f = {
  tudo: {
    icon: GalleryVerticalEnd,
    title: 'Tudo',
    value: 'tudo',
  },
  concluido: {
    icon: CircleCheckBig,
    title: 'Concluído',
    value: 'concluido',
  },
  processando: {
    icon: RefreshCw,
    title: 'Processando',
    value: 'processando',
  },
  pendente: {
    icon: CircleDashed,
    title: 'Pendente',
    value: 'pendente',
  },
}

const { open } = useSidebar()
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
    </header>

    <header class="flex h-header border-b px-6">
      <div class="flex items-center gap-3">
        <Button
          v-for="filter in f"
          :key="filter.value"
          size="sm"
          class="border"
          :variant="filter.value === 'tudo' ? 'secondary' : 'outline'"
        >
          <component :is="filter.icon" />
          <span>{{ filter.title }}</span>
        </Button>
      </div>

      <div
        class="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground"
      >
        <ListCheck class="size-5" />
        <span>Tudo certo</span>
      </div>
    </header>
  </Teleport>
</template>
