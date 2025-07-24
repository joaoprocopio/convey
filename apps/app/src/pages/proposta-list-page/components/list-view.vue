<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ChevronDown } from 'lucide-vue-next'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/lib/shadcn/ui/collapsible'
import { propostaQueries } from '~/queries/proposta'
import { PropostaStatus } from '~/schemas/proposta'

const propostas = useQuery(propostaQueries.all())
</script>

<template>
  <div v-if="propostas.isSuccess.value">
    <Collapsible
      default-open
      v-slot="{ open }"
      v-for="status in PropostaStatus"
      :key="status.value"
    >
      <CollapsibleTrigger as-child>
        <div
          :data-open="open"
          class="group sticky top-24 z-10 flex h-subheader items-center gap-4 bg-secondary/70 px-6 text-muted-foreground backdrop-blur-xl"
        >
          <ChevronDown
            class="size-3.5 transition duration-300 group-data-[open=true]:rotate-180"
          />
          <component :is="status.icon" class="size-5" />
          <p class="text-sm text-foreground">{{ status.title }}</p>
          <p class="text-xs">
            {{ propostas.data.value![status.value]?.length }}
          </p>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div
          v-for="proposta in propostas.data.value![status.value]"
          :key="proposta.id"
        >
          {{ proposta }}
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
