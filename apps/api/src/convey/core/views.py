from typing import List

from convey.core.schemas import AttractionSchema
from convey.core.services import get_attraction, list_attractions
from convey.database.deps import AsyncSessionDep
from fastapi import APIRouter

router_v1 = APIRouter()


@router_v1.get("/attractions", response_model=List[AttractionSchema])
async def attractions_list(session: AsyncSessionDep):
    cicatriz_queimadas = await list_attractions(session)

    return cicatriz_queimadas


@router_v1.get("/attractions/{attraction_id}", response_model=List[AttractionSchema])
async def attractions_detail(session: AsyncSessionDep, attraction_id: int):
    cicatriz_queimadas = await get_attraction(session, attraction_id)

    return cicatriz_queimadas
