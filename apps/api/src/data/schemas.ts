import { TEnum } from '~/utils/enums'

export type TPropostaStatus = 'backlog'

export type TPropostaAttachmentMimeType =
  | 'application/pdf'
  | 'image/jpeg'
  | 'image/png'
  | 'image/webp'

export const PropostaStatus = {
  Backlog: 'backlog',
} as const satisfies TEnum<TPropostaStatus>

export const PropostaAttachmentMimeType = {
  PDF: 'application/pdf',
  JPG: 'image/jpeg',
  JPEG: 'image/jpeg',
  PNG: 'image/png',
  WEBP: 'image/webp',
} as const satisfies TEnum<TPropostaAttachmentMimeType>

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
  file: string
  url: string
  mimetype: TPropostaAttachmentMimeType
}
