<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '~/lib/shadcn/ui/sidebar'

import Sidebar from './components/sidebar.vue'
</script>

<template>
  <SidebarProvider>
    <Sidebar />

    <SidebarInset>
      <div class="shrink-0 grow-1 basis-auto">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
