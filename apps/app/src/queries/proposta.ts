import type { Keyring, OptionsKeyring } from '~/lib/query/types'
import { queryOptions } from '~/lib/query/utils'
import { PropostaServices } from '~/services/proposta'

export const propostaKeys = {
  all: () => ['propostas'],
} as const satisfies Keyring

export const propostaQueries = {
  all: () =>
    queryOptions({
      queryKey: propostaKeys.all(),
      queryFn: PropostaServices.listPropostas,
    }),
} as const satisfies OptionsKeyring
