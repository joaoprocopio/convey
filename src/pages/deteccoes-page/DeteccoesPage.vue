<script setup lang="ts">
import { GalleryVerticalEnd, ListCheck } from "lucide-vue-next";

import DeteccaoDetails from "~/components/deteccao-details";
import DeteccaoStatusIndicator from "~/components/deteccao-status-indicator";
import { DeteccaoStatus, type TDeteccaoStatus } from "~/constants/deteccao";
import { deteccoesCount, deteccoesGroupedByStatus } from "~/data";
import type { UIEnum } from "~/lib/enums/types";
import { Button } from "~/lib/shadcn/ui/button";
import { SidebarTrigger } from "~/lib/shadcn/ui/sidebar";

const DeteccaoStatusFilters = {
  tudo: {
    icon: GalleryVerticalEnd,
    title: "Tudo",
    value: "tudo",
  },
  ...DeteccaoStatus,
} as const satisfies UIEnum<TDeteccaoStatus | "tudo">;
</script>

<template>
  <Teleport to="#sidebar-header-container" defer>
    <header class="flex h-header items-center border-b px-6">
      <SidebarTrigger />
      <h1 class="ml-2 text-sm">Detecções</h1>
      <span
        class="ml-2 inline-flex aspect-[3.33/4] items-center justify-center rounded-sm bg-muted px-1 text-2xs font-medium"
      >
        {{ deteccoesCount }}
      </span>
    </header>

    <header class="flex h-header border-b px-6">
      <div class="flex items-center gap-3">
        <Button
          v-for="filter in DeteccaoStatusFilters"
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

  <div v-for="status in DeteccaoStatus" :key="status.value">
    <DeteccaoStatusIndicator
      :status="status"
      :status-quantity="deteccoesGroupedByStatus[status.value].length"
    />

    <DeteccaoDetails
      v-for="deteccao in deteccoesGroupedByStatus[status.value]"
      :key="deteccao.id"
      :deteccao="deteccao"
      :status="status"
    />
  </div>
</template>
