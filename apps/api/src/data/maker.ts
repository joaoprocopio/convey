import { faker } from '@faker-js/faker/locale/pt_BR'

import {
  IProposta,
  IPropostaAssignee,
  IPropostaAttachment,
  PropostaAttachmentMimeType,
  PropostaStatus,
} from '~/data/schemas'
import { array } from '~/utils/array'
import { randomBool, randomEnumValue, randomInt } from '~/utils/random'

export function makeProposta(url: URL): IProposta {
  return {
    id: randomInt(1, 100),
    name: faker.commerce.productName(),
    status: randomEnumValue(PropostaStatus),
    assignee: randomBool() ? makeAssignee() : null,
    attachments: array(randomInt(0, 5)).map(() => makeAttachment(url)),
  }
}

export function makeAttachment(url: URL): IPropostaAttachment {
  const mime = randomEnumValue(PropostaAttachmentMimeType)

  return {
    id: randomInt(1, 100),
    url: `${url.origin}/static/${faker.system.commonFileName(faker.system.fileExt(mime))}`,
    mimetype: mime,
  }
}

export function makeAssignee(): IPropostaAssignee {
  return {
    id: randomInt(1, 100),
    email: faker.internet.email(),
  }
}
