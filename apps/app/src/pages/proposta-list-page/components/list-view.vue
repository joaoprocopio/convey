<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { Check, ChevronDown } from 'lucide-vue-next'

import { PropostaDetailPageName } from '~/lib/router/constants'
import { Avatar, AvatarFallback } from '~/lib/shadcn/ui/avatar'
import { Checkbox } from '~/lib/shadcn/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/lib/shadcn/ui/collapsible'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '~/lib/shadcn/ui/hover-card'
import { propostaQueries } from '~/queries/proposta'
import { PropostaStatus } from '~/schemas/proposta'
import { composeInitials } from '~/utils/avatar'
import { isEmpty } from '~/utils/is'

const propostas = useQuery(propostaQueries.all())
</script>

<template>
  <div v-if="propostas.isSuccess.value">
    <Collapsible
      v-for="status in PropostaStatus"
      :key="status.value"
      class="group"
      :default-open="true"
    >
      <template v-if="!isEmpty(propostas.data.value![status.value])">
        <CollapsibleTrigger
          class="sticky top-24 flex h-subheader w-full items-center gap-4 border-b bg-accent/70 px-6 text-accent-foreground/70 backdrop-blur-xl"
        >
          <ChevronDown
            class="size-3.5 transition duration-300 group-data-[state=closed]:rotate-180 group-data-[state=open]:text-foreground"
          />
          <component :is="status.icon" class="size-5" />
          <p class="text-sm font-medium text-foreground">
            {{ status.title }}
          </p>
          <p class="text-2xs font-semibold">
            {{ propostas.data.value![status.value]?.length }}
          </p>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <RouterLink
            v-for="proposta in propostas.data.value![status.value]"
            :key="proposta.id"
            :to="{ name: PropostaDetailPageName, params: { id: proposta.id } }"
            class="flex w-full items-center px-6 py-3 hover:bg-accent"
          >
            <Checkbox class="hitbox-3 size-5 rounded-sm">
              <Check class="size-4" :stroke-width="2.25" />
            </Checkbox>

            <component
              class="ml-8 size-6 text-muted-foreground"
              :is="status.icon"
            />

            <span class="ml-10 font-medium">{{ proposta.name }}</span>

            <HoverCard v-if="proposta.assignee">
              <HoverCardTrigger as-child>
                <Avatar class="ml-auto size-6">
                  <AvatarFallback class="text-4xs font-medium">
                    {{ composeInitials(proposta.assignee.full_name) }}
                  </AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent align="end" as-child>
                <div class="flex w-fit gap-4">
                  <Avatar class="size-10 shrink-0">
                    <AvatarFallback class="text-base font-medium">
                      {{ composeInitials(proposta.assignee.full_name) }}
                    </AvatarFallback>
                  </Avatar>
                  <div class="flex-1">
                    <p class="text-sm">
                      {{ proposta.assignee.full_name }}
                    </p>
                    <p class="truncate text-xs text-muted-foreground">
                      {{ proposta.assignee.email }}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </RouterLink>
        </CollapsibleContent>
      </template>
    </Collapsible>
  </div>
</template>
