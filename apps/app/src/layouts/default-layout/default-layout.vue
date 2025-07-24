<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '~/lib/shadcn/ui/sidebar'

import Sidebar from './components/sidebar.vue'
</script>

<template>
  <SidebarProvider>
    <Sidebar />

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
