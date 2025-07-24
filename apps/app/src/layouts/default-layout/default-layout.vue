<script setup lang="ts">
import {
  ChevronDown,
  FileText,
  Home,
  Inbox,
  LogOut,
  type LucideIcon,
  PackageOpen,
  Search,
  Truck,
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import { PropostasPageName } from '~/lib/router/constants'
import { Avatar, AvatarFallback } from '~/lib/shadcn/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/lib/shadcn/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from '~/lib/shadcn/ui/sidebar'
import { isNil } from '~/utils/is'

interface Group {
  group?: string
  items?: Item[]
}

interface Item {
  label: string
  icon?: LucideIcon
  route?: string
}

const groups: Group[] = [
  {
    items: [
      {
        label: 'Buscar',
        icon: Search,
      },
      {
        label: 'Página inicial',
        icon: Home,
      },
      {
        label: 'Caixa de entrada',
        icon: Inbox,
      },
    ],
  },

  {
    group: 'Logística',
    items: [
      {
        label: 'Produtos',
        icon: PackageOpen,
      },
      {
        label: 'Propostas',
        icon: FileText,
        route: PropostasPageName,
      },
      {
        label: 'Pedidos',
        icon: Truck,
      },
    ],
  },
]
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <SidebarMenuButton class="w-fit">
              <Avatar class="size-6 rounded">
                <AvatarFallback
                  class="rounded bg-sidebar-primary text-2xs text-sidebar-primary-foreground"
                >
                  RC
                </AvatarFallback>
              </Avatar>

              <span class="text-sm font-medium"> Roger Camargo </span>

              <ChevronDown class="size-4 text-muted-foreground" />
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
        <SidebarGroup v-for="(group, groupIndex) in groups" :key="groupIndex">
          <SidebarGroupLabel v-if="!isNil(group.group)">
            {{ group.group }}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem
                v-for="(item, itemIndex) in group.items"
                :key="itemIndex"
              >
                <RouterLink
                  v-slot="{ isActive }"
                  :to="{ name: item.route }"
                  custom
                >
                  <SidebarMenuButton
                    as-child
                    :is-active="isActive && 'route' in item"
                    :aria-disabled="!item.route"
                  >
                    <RouterLink :to="{ name: item.route }">
                      <component :is="item.icon" v-if="item.icon" />
                      {{ item.label }}
                    </RouterLink>
                  </SidebarMenuButton>
                </RouterLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <!-- <SidebarGroupContent>
            <SidebarMenu>
              <template>
                <Collapsible as-child :default-open="true">
                  <SidebarMenuItem>
                    <RouterLink
                      v-slot="{ isActive }"
                      :to="{ name: link.route }"
                      custom
                    >
                      <SidebarMenuButton
                        as-child
                        :is-active="isActive && 'route' in link"
                        :tooltip="link.tooltip"
                        :aria-disabled="!link.route"
                      >
                        <RouterLink :to="{ name: link.route }">
                          <component :is="link.icon" v-if="link.icon" />
                          {{ link.title }}
                        </RouterLink>
                      </SidebarMenuButton>
                    </RouterLink>
                  </SidebarMenuItem>
                </Collapsible>
              </template>
            </SidebarMenu>
          </SidebarGroupContent> -->
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
