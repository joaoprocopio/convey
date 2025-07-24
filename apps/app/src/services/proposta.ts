import { GroupedPropostaArray } from '~/schemas/proposta'
import { fetchAPI } from '~/services/clients/api'

async function listPropostas() {
  const response = await fetchAPI('/propostas')
  const parsed = GroupedPropostaArray.parse(response)

  return parsed
}

export const PropostaServices = {
  listPropostas,
} as const
