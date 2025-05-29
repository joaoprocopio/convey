<script setup lang="ts">
import {
  ChevronDown,
  Computer,
  GalleryVerticalEnd,
  HardDriveDownload,
  LogOut,
  type LucideIcon,
  Moon,
  Palette,
  Satellite,
  Sun,
} from "lucide-vue-next";
import { RouterLink } from "vue-router";

import { DeteccoesPageName } from "~/lib/router/constants";
import { Avatar, AvatarFallback } from "~/lib/shadcn/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/lib/shadcn/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "~/lib/shadcn/ui/sidebar";
import { useTheme } from "~/lib/theme/composables";
import { Theme } from "~/lib/theme/constants";

const theme = useTheme();

const themes = [
  {
    icon: Computer,
    title: "Sistema",
    value: Theme.System,
  },
  {
    icon: Sun,
    title: "Claro",
    value: Theme.Light,
  },
  {
    icon: Moon,
    title: "Escuro",
    value: Theme.Dark,
  },
] as const satisfies { icon: LucideIcon; value: string; title: string }[];

type Nav = {
  icon: LucideIcon;
  title: string;
  tooltip: string;
  route?: string;
};

const navlinks: Nav[] = [
  {
    icon: GalleryVerticalEnd,
    title: "Detecções",
    tooltip: "Detecções",
    route: DeteccoesPageName,
  },
  {
    icon: Satellite,
    title: "Sensores",
    tooltip: "Sensores",
  },

  {
    icon: HardDriveDownload,
    title: "Exportar",
    tooltip: "Exportar",
  },
] as const;
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <SidebarMenuButton
              class="w-fit truncate group-data-[collapsible=icon]:p-1!"
            >
              <Avatar class="size-6 rounded">
                <AvatarFallback
                  class="rounded bg-sidebar-primary text-2xs text-sidebar-primary-foreground"
                >
                  RC
                </AvatarFallback>
              </Avatar>

              <span class="truncate text-sm font-medium"> Roger Camargo </span>

              <ChevronDown class="size-4 text-sidebar-ring" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent class="min-w-56" align="start" side="bottom">
            <DropdownMenuLabel
              class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
            >
              <Avatar class="size-8 rounded">
                <AvatarFallback
                  class="rounded bg-sidebar-primary text-sidebar-primary-foreground"
                >
                  RC
                </AvatarFallback>
              </Avatar>

              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-medium"> Roger Camargo </span>
                <span class="truncate text-xs text-muted-foreground">
                  huogerac@gmail.com
                </span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Preferências</DropdownMenuLabel>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger class="gap-2">
                <Palette class="size-4 text-muted-foreground" />
                Tema
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup v-model="theme">
                    <DropdownMenuRadioItem
                      v-for="theme in themes"
                      :key="theme.value"
                      :value="theme.value"
                    >
                      <component
                        :is="theme.icon"
                        class="text-muted-foreground"
                      />
                      {{ theme.title }}
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LogOut />
                Sair
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem
                v-for="(navlink, navlinkindex) in navlinks"
                :key="navlinkindex"
              >
                <RouterLink
                  v-slot="{ isActive }"
                  :to="{ name: navlink.route }"
                  custom
                >
                  <SidebarMenuButton
                    as-child
                    :is-active="isActive && 'route' in navlink"
                    :tooltip="navlink.tooltip"
                    :aria-disabled="!navlink.route"
                  >
                    <RouterLink :to="{ name: navlink.route }">
                      <component :is="navlink.icon" />
                      {{ navlink.title }}
                    </RouterLink>
                  </SidebarMenuButton>
                </RouterLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <div
        id="sidebar-header-container"
        class="sticky top-0 z-20 bg-background/70 backdrop-blur-xl"
      />

      <div class="shrink-0 grow-1 basis-auto">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
