<script setup lang="ts">
import {
  CalendarFold,
  CalendarPlus,
  CalendarSync,
  GalleryVerticalEnd,
  Hash,
  ListCheck,
  MoveRight,
} from "lucide-vue-next";

import { DeteccaoStatus, type TDeteccaoStatus } from "~/constants/deteccao";
import { deteccoesCount, deteccoesGroupedByStatus } from "~/data";
import type { UIEnum } from "~/lib/enums/types";
import { DeteccaoPageName } from "~/lib/router/constants";
import { AspectRatio } from "~/lib/shadcn/ui/aspect-ratio";
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
    <div
      class="sticky top-24 z-10 flex h-subheader items-center gap-4 bg-secondary/70 px-6 text-muted-foreground backdrop-blur-xl"
    >
      <component :is="status.icon" class="size-5" />
      <p class="text-sm text-foreground">{{ status.title }}</p>
      <p class="text-sm">
        {{ deteccoesGroupedByStatus[status.value].length }}
      </p>
    </div>

    <RouterLink
      v-for="deteccao in deteccoesGroupedByStatus[status.value]"
      :key="deteccao.id"
      :to="{ name: DeteccaoPageName, params: { id: deteccao.id } }"
      class="grid-template grid w-full gap-x-8 gap-y-4 px-6 py-4 hover:bg-secondary/50 hover:text-secondary-foreground"
    >
      <div class="area-thumbnail w-56">
        <AspectRatio :ratio="8 / 5" class="overflow-hidden rounded-lg">
          <img
            :src="deteccao.thumbnail_url"
            class="h-full w-full bg-muted object-cover"
          />
        </AspectRatio>
      </div>

      <div class="grid-field area-id">
        <Hash class="grid-field-icon" />
        <span>{{ deteccao.id }}</span>
      </div>

      <div class="grid-field area-periodo">
        <CalendarFold class="grid-field-icon" />

        <div class="flex items-center gap-x-2">
          <span>{{ deteccao.periodo_start_at }}</span>
          <MoveRight class="h-5" />
          <span>{{ deteccao.periodo_end_at }}</span>
        </div>
      </div>

      <div class="grid-field area-status">
        <component :is="status.icon" class="grid-field-icon" />
        <span>{{ status.title }}</span>
      </div>

      <div class="grid-field area-created-at">
        <CalendarPlus class="grid-field-icon" />
        <span>{{ deteccao.created_at }}</span>
      </div>

      <div class="grid-field area-updated-at">
        <CalendarSync class="grid-field-icon" />
        <span>{{ deteccao.updated_at }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
@reference "~/assets/styles/tailwind.css";

.grid-template {
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "thumbnail id created-at"
    "thumbnail periodo updated-at"
    "thumbnail status .";
}

.grid-field {
  @apply flex items-center gap-x-4;
}

.grid-field-icon {
  @apply size-5 text-muted-foreground;
}

.area-thumbnail {
  grid-area: thumbnail;
}

.area-id {
  grid-area: id;
}

.area-periodo {
  grid-area: periodo;
}

.area-status {
  grid-area: status;
}

.area-created-at {
  grid-area: created-at;
}

.area-updated-at {
  grid-area: updated-at;
}
</style>
