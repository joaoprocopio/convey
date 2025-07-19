from typing import List, Sequence

from fastapi import APIRouter, Response, status

from convey.database.deps import AsyncSessionDep
from convey.propostas.models import Proposta
from convey.propostas.schemas import PropostaSchema
from convey.propostas.services import get_proposta, list_propostas

router_v1 = APIRouter()


@router_v1.get(
    "/",
    response_model=List[PropostaSchema],
    status_code=status.HTTP_200_OK,
)
async def attractions_list(session: AsyncSessionDep) -> Sequence[Proposta]:
    attractions = await list_propostas(session)

    return attractions


@router_v1.get(
    "/{proposta_id}",
    response_model=PropostaSchema | None,
    status_code=status.HTTP_200_OK,
)
async def attractions_detail(
    proposta_id: int, response: Response, session: AsyncSessionDep
) -> Proposta | None:
    attraction = await get_proposta(session, proposta_id)

    if attraction is None:
        response.status_code = status.HTTP_404_NOT_FOUND
        return attraction

    return attraction
