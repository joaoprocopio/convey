<script setup lang="ts">
import {
  GalleryVerticalEnd,
  ListCheck,
  type LucideIcon,
} from "lucide-vue-next";

import ShowDetails from "~/components/show-details";
import ShowStatusIndicator from "~/components/show-status-indicator";
import { showsCount, showsGroupedByStatus } from "~/data";
import type { TEnum } from "~/lib/enums/types";
import { Button } from "~/lib/shadcn/ui/button";
import { SidebarTrigger } from "~/lib/shadcn/ui/sidebar";
import { ShowStatus, type TShowStatus } from "~/models/show";

const filters = {
  tudo: {
    icon: GalleryVerticalEnd,
    title: "Tudo",
    value: "tudo",
  },
  ...ShowStatus,
} as const satisfies TEnum<
  TShowStatus | "tudo",
  { icon: LucideIcon; title: string }
>;
</script>

<template>
  <Teleport to="#sidebar-header-container" defer>
    <header class="flex h-header items-center border-b px-6">
      <SidebarTrigger />
      <h1 class="ml-2 text-sm">Shows</h1>
      <span
        class="ml-2 inline-flex aspect-[3.33/4] items-center justify-center rounded-sm bg-muted px-1 text-2xs font-medium"
      >
        {{ showsCount }}
      </span>
    </header>

    <header class="flex h-header border-b px-6">
      <div class="flex items-center gap-3">
        <Button
          v-for="filter in filters"
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

  <div v-for="status in ShowStatus" :key="status.value">
    <ShowStatusIndicator
      :status="status"
      :quantity="showsGroupedByStatus[status.value].length"
    />

    <ShowDetails
      v-for="show in showsGroupedByStatus[status.value]"
      :key="show.id"
      :show="show"
      :status="status"
    />
  </div>
</template>
