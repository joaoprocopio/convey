import { fetchAPI } from '~/services/clients/api'

async function listPropostas() {
  const response = await fetchAPI('/propostas')

  return response
}

export const PropostaServices = {
  listPropostas,
} as const
