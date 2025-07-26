import {
  BadgeCheck,
  CircleDashed,
  type LucideIcon,
  MessagesSquare,
  Send,
  Target,
} from 'lucide-vue-next'
import { z } from 'zod/v4'

import type { TEnum } from '~/lib/enums/types'

export type TPropostaStatus =
  | 'backlog'
  | 'prospectando'
  | 'negociando'
  | 'proposta'
  | 'aprovado'

export type TPropostaMimeType =
  | 'application/pdf'
  | 'image/jpeg'
  | 'image/png'
  | 'image/webp'

export const PropostaStatus = {
  backlog: {
    value: 'backlog',
    title: 'Backlog',
    icon: CircleDashed,
  },
  prospectando: {
    value: 'prospectando',
    title: 'Prospectando',
    icon: Target,
  },
  negociando: {
    value: 'negociando',
    title: 'Negociando',
    icon: MessagesSquare,
  },
  proposta: {
    value: 'proposta',
    title: 'Proposta',
    icon: Send,
  },
  aprovado: {
    value: 'aprovado',
    title: 'Aprovado',
    icon: BadgeCheck,
  },
} as const satisfies TEnum<TPropostaStatus, { icon: LucideIcon; title: string }>

export const PropostaAttachmentMimeType = {
  'application/pdf': {
    value: 'application/pdf',
  },
  'image/jpeg': {
    value: 'image/jpeg',
  },
  'image/png': {
    value: 'image/png',
  },
  'image/webp': {
    value: 'image/webp',
  },
} as const satisfies TEnum<TPropostaMimeType>

export type TPropostaAttachmentInput = z.input<typeof PropostaAttachment>
export type TPropostaAttachmentOutput = z.output<typeof PropostaAttachment>

export const PropostaAttachment = z.object({
  id: z.int(),
  url: z.url(),
  file: z.string(),
  mimetype: z.union(
    Object.values(PropostaAttachmentMimeType).map((mime) =>
      z.literal(mime.value),
    ),
  ),
})

export type TPropostaAssigneeInput = z.input<typeof PropostaAssignee>
export type TPropostaAssigneeOutput = z.output<typeof PropostaAssignee>

export const PropostaAssignee = z.object({
  id: z.int(),
  email: z.email(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
})

export type TPropostaInput = z.input<typeof Proposta>
export type TPropostaOutput = z.output<typeof Proposta>

export const Proposta = z.object({
  id: z.int(),
  name: z.string(),
  status: z.union(
    Object.values(PropostaStatus).map((status) => z.literal(status.value)),
  ),
  assignee: PropostaAssignee.nullable(),
  attachments: z.array(PropostaAttachment),
})

export type TPropostaArrayInput = z.input<typeof PropostaArray>
export type TPropostaArrayOutput = z.output<typeof PropostaArray>

export const PropostaArray = z.array(Proposta)

export type TGroupedPropostaArrayInput = z.input<typeof GroupedPropostaArray>
export type TGroupedPropostaArrayOutput = z.output<typeof GroupedPropostaArray>

export const GroupedPropostaArray = z.partialRecord(
  z.union(
    Object.values(PropostaStatus).map((status) => z.literal(status.value)),
  ),
  PropostaArray,
)
