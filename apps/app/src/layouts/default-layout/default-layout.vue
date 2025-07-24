<script setup lang="ts">
import { ChevronDown, LogOut } from 'lucide-vue-next'

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
  SidebarHeader,
  SidebarInset,
  SidebarMenuButton,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '~/lib/shadcn/ui/sidebar'

import NavActions from './nav-actions.vue'
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarHeader>
        <div class="flex items-center justify-between gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton class="w-fit p-1">
                <Avatar class="size-6 rounded">
                  <AvatarFallback
                    class="rounded bg-sidebar-primary text-2xs text-sidebar-primary-foreground"
                  >
                    RC
                  </AvatarFallback>
                </Avatar>

                <span class="truncate text-sm font-medium">
                  Roger Camargo
                </span>

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

          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavActions />
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
