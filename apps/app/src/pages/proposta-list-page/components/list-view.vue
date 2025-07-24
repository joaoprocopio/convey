<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import { propostaQueries } from '~/queries/proposta'

const propostas = useQuery(propostaQueries.all())
</script>

<template>
  <div class="px-6 py-8">
    {{ propostas.data }}
  </div>
</template>
