<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ChevronDown } from 'lucide-vue-next'

import { Checkbox } from '~/lib/shadcn/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/lib/shadcn/ui/collapsible'
import { propostaQueries } from '~/queries/proposta'
import { PropostaStatus } from '~/schemas/proposta'
import { isEmpty } from '~/utils/is'

const propostas = useQuery(propostaQueries.all())
</script>

<template>
  <div v-if="propostas.isSuccess.value">
    <Collapsible
      default-open
      class="group"
      v-for="status in PropostaStatus"
      :key="status.value"
    >
      <template v-if="!isEmpty(propostas.data.value![status.value])">
        <CollapsibleTrigger
          class="sticky top-24 z-10 flex h-subheader w-full items-center gap-4 bg-secondary/70 px-6 text-muted-foreground backdrop-blur-xl"
        >
          <ChevronDown
            class="size-3.5 transition duration-300 group-data-[state=closed]:rotate-180"
          />
          <component :is="status.icon" class="size-5" />
          <p class="text-sm text-foreground">{{ status.title }}</p>
          <p class="text-xs">
            {{ propostas.data.value![status.value]?.length }}
          </p>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div
            v-for="proposta in propostas.data.value![status.value]"
            class="flex px-6 py-2"
            :key="proposta.id"
          >
            <Checkbox class="size-5 [&_svg]:size-3.5" />
            <component :is="status.icon" />
            <span>{{ proposta.assignee?.email }}</span>
            <span>{{ proposta.name }}</span>
          </div>
        </CollapsibleContent>
      </template>
    </Collapsible>
  </div>
</template>
