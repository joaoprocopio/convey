<script setup lang="ts">
import {
  CalendarFold,
  CalendarPlus,
  CalendarSync,
  type LucideIcon,
  MapPinCheck,
  MapPinHouse,
  MoveRight,
} from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { Leafmap } from "~/components/leafmap";
import { flattenedShows } from "~/data";
import { ShowsPageName } from "~/lib/router/constants";
import { AspectRatio } from "~/lib/shadcn/ui/aspect-ratio";
import { Badge } from "~/lib/shadcn/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/lib/shadcn/ui/breadcrumb";
import { SidebarTrigger } from "~/lib/shadcn/ui/sidebar";
import { Skeleton } from "~/lib/shadcn/ui/skeleton";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
} from "~/lib/shadcn/ui/stepper";
import { ShowStatus, type TShow } from "~/models/show";

const route = useRoute();

const show = computed<TShow | undefined>(() =>
  flattenedShows.find(
    (show) => show.id === parseInt(route.params.id as string),
  ),
);

const status = computed(() => show.value && ShowStatus[show.value?.status]);

const dates = computed(
  () =>
    [
      {
        icon: MapPinHouse,
        label: "Data inicial",
        url: show.value?.periodo_start_thumbnail_url,
        timestamp: show.value?.periodo_start_at,
      },
      {
        icon: MapPinCheck,
        label: "Data final",
        url: show.value?.periodo_end_thumbnail_url,
        timestamp: show.value?.periodo_end_at,
      },
    ] as const satisfies {
      label: string;
      icon: LucideIcon;
      url?: string;
      timestamp?: string;
    }[],
);
</script>

<template>
  <Teleport to="#sidebar-header-container" defer>
    <header class="flex h-header items-center border-b px-6">
      <SidebarTrigger />

      <Breadcrumb class="ml-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink :as="RouterLink" :to="{ name: ShowsPageName }">
              Shows
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage> # {{ show?.id }} </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  </Teleport>

  <div class="grid h-full max-h-full grid-cols-[auto_1fr]">
    <div class="pr-24 pl-6">
      <div class="bg-background/60 py-8">
        <h1 class="text-3xl font-semibold"># {{ show?.id }}</h1>

        <div class="mt-6 flex max-w-lg flex-wrap items-center gap-x-4 gap-y-4">
          <Badge variant="secondary" size="lg">
            <component :is="status?.icon" class="text-muted-foreground" />
            <p>{{ status?.title }}</p>
          </Badge>

          <Badge variant="secondary" size="lg">
            <CalendarFold class="text-muted-foreground" />
            <span>{{ show?.periodo_start_at }}</span>
            <MoveRight class="h-4" />
            <span>{{ show?.periodo_end_at }}</span>
          </Badge>

          <Badge variant="secondary" size="lg">
            <CalendarPlus class="text-muted-foreground" />
            {{ show?.created_at }}
          </Badge>

          <Badge variant="secondary" size="lg">
            <CalendarSync class="text-muted-foreground" />
            {{ show?.updated_at }}
          </Badge>
        </div>
      </div>

      <div class="py-8">
        <Stepper orientation="vertical" class="flex-col gap-12">
          <StepperItem
            v-for="(date, dateindex) in dates"
            :key="dateindex"
            :step="dateindex"
            class="relative items-start gap-8"
          >
            <StepperIndicator
              class="size-10 !bg-accent !text-accent-foreground"
            >
              <component :is="date.icon" />
            </StepperIndicator>

            <div>
              <StepperDescription>
                {{ date.label }}
              </StepperDescription>

              <StepperTitle class="mt-0.5">
                {{ date.timestamp }}
              </StepperTitle>

              <div class="mt-6 w-md">
                <AspectRatio :ratio="8 / 5" class="overflow-hidden rounded-lg">
                  <img
                    :src="date.url"
                    class="h-full w-full bg-muted object-cover"
                  />
                </AspectRatio>
              </div>
            </div>

            <StepperSeparator
              v-if="dateindex < dates.length - 1"
              :class="[
                'absolute block w-0.5 shrink-0 !bg-muted',
                // Essa é a expressão. É a altura do `StepperIndicator`.
                'top-[calc(var(--spacing)*10)]',
                // Essa é a expressão que centraliza o `StepperSeparator`. Essa expressão representa a metade da largura do `StepperIndicator`, menos a metade largura do `StepperSeparator`.
                'left-[calc(((var(--spacing)*10)/2)-(var(--spacing)*0.5)/2)))]',
                // Essa é a altura do `StepperSeparator`. É igual ao gap entre os `StepperItem`, mais a altura do `StepperItem`, menos a altura do `StepperIndicator`.
                'h-[calc((((var(--spacing)*12)+(var(--spacing)*87))-(var(--spacing)*10)))]',
              ]"
            />
          </StepperItem>
        </Stepper>
      </div>
    </div>

    <div class="sticky top-12 h-[calc(100dvh-(var(--spacing)*12))]">
      <Suspense>
        <template #fallback>
          <Skeleton class="size-full rounded-none" />
        </template>

        <template #default>
          <Leafmap class="size-full" />
        </template>
      </Suspense>
    </div>
  </div>
</template>
