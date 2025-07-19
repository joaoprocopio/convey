from convey.propostas.enums import PropostaStatus
from pydantic import BaseModel


class PropostaSchema(BaseModel):
    id: int
    name: str
    slug: str
    status: PropostaStatus
