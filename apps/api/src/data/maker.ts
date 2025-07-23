import { faker } from '@faker-js/faker/locale/pt_BR'
import { EventHandlerRequest } from 'h3'
import { getRequestURL, H3Event } from 'h3'

import {
  IProposta,
  IPropostaAssignee,
  IPropostaAttachment,
  PropostaAttachmentMimeType,
  PropostaStatus,
} from '~/data/schemas'
import { array } from '~/utils/array'
import { randomBool, randomEnumValue, randomInt } from '~/utils/random'

export function makeProposta(event: H3Event<EventHandlerRequest>): IProposta {
  return {
    id: randomInt(1, 100),
    name: faker.commerce.productName(),
    status: randomEnumValue(PropostaStatus),
    assignee: randomBool() ? makeAssignee() : null,
    attachments: array(randomInt(0, 5)).map(() => makeAttachment(event)),
  }
}

export function makeAttachment(
  event: H3Event<EventHandlerRequest>,
): IPropostaAttachment {
  const requestURL = getRequestURL(event)
  const mime = randomEnumValue(PropostaAttachmentMimeType)
  const ext = faker.system.fileExt(mime)
  const file = faker.system.commonFileName(ext)
  const url = `${requestURL.origin}/static/${file}`

  return {
    id: randomInt(1, 100),
    url: url,
    file: file,
    mimetype: mime,
  }
}

export function makeAssignee(): IPropostaAssignee {
  return {
    id: randomInt(1, 100),
    email: faker.internet.email(),
  }
}
