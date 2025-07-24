<script setup lang="ts">
import {
  ChevronDown,
  FileText,
  Home,
  type LucideIcon,
  PackageOpen,
  Search,
  Truck,
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import {
  InicioPageName,
  ProdutosPageName,
  PropostasPageName,
} from '~/lib/router/constants'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/lib/shadcn/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
        label: 'Início',
        icon: Home,
        route: InicioPageName,
      },
    ],
  },

  {
    group: 'Logística',
    items: [
      {
        label: 'Produtos',
        icon: PackageOpen,
        route: ProdutosPageName,
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
  <template v-for="(group, groupIndex) in groups" :key="groupIndex">
    <template v-if="!isNil(group.group)">
      <Collapsible defaultOpen class="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild class="hover:bg-sidebar-accent">
            <CollapsibleTrigger>
              {{ group.group }}
              <ChevronDown
                class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
              />
            </CollapsibleTrigger>
          </SidebarGroupLabel>

          <CollapsibleContent class="py-0.5">
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
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </template>

    <template v-else>
      <SidebarGroup>
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
      </SidebarGroup>
    </template>
  </template>
</template>
