import { TEnum } from '~/utils/enums'

export type TPropostaStatus = 'backlog'

export const PropostaStatus = {
  Backlog: 'backlog',
} as const satisfies TEnum<TPropostaStatus>

export interface IProposta {
  id: number
  name: string
  status: TPropostaStatus
  assignee: IPropostaAssignee | null
  attachments: IPropostaAttachment[]
}

export interface IPropostaAssignee {
  id: number
  email: string
}

export interface IPropostaAttachment {
  id: number
  url: string
}
