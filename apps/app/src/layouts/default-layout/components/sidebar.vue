<script setup lang="ts">
import { ChevronDown, LogOut, PanelLeft } from 'lucide-vue-next'

import { Avatar, AvatarFallback } from '~/lib/shadcn/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/lib/shadcn/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from '~/lib/shadcn/ui/sidebar'

import NavActions from './nav-actions.vue'

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Sidebar collapsible="offcanvas" variant="sidebar">
    <SidebarHeader>
      <div class="flex items-center justify-between gap-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <SidebarMenuButton class="w-fit p-1">
              <Avatar class="size-6 rounded-sm">
                <AvatarFallback
                  class="rounded-none bg-sidebar-primary text-2xs text-sidebar-primary-foreground"
                >
                  RC
                </AvatarFallback>
              </Avatar>

              <span class="truncate text-sm font-medium"> Roger Camargo </span>

              <ChevronDown class="ml-auto size-4 text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent class="min-w-56" align="start" side="bottom">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LogOut />
                Sair
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <SidebarMenuButton
          @click="toggleSidebar"
          class="size-8 shrink-0 justify-center p-0 text-muted-foreground [&>svg]:size-5"
        >
          <PanelLeft />
        </SidebarMenuButton>
      </div>
    </SidebarHeader>

    <SidebarContent>
      <NavActions />
    </SidebarContent>

    <SidebarRail />
  </Sidebar>
</template>
