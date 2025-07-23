import { faker } from '@faker-js/faker/locale/pt_BR'

import {
  IProposta,
  IPropostaAssignee,
  IPropostaAttachment,
  PropostaStatus,
} from '~/data/schemas'
import { array } from '~/utils/array'
import { randomInt } from '~/utils/random'

export function makeProposta(): IProposta {
  return {
    id: randomInt(1, 100),
    name: faker.commerce.productName(),
    status: faker.helpers.enumValue(PropostaStatus),
    assignee: makeAssignee(),
    attachments: array(randomInt(0, 5)).map(() => makeAttachment()),
  }
}

export function makeAttachment(): IPropostaAttachment {
  return {
    id: randomInt(1, 100),
    url: faker.internet.url(), // trocar pra uma parada que sabe se é pdf ou imagem ou etc
  }
}

export function makeAssignee(): IPropostaAssignee {
  return {
    id: randomInt(1, 100),
    email: faker.internet.email(),
  }
}
