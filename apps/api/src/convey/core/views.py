from typing import List

from convey.core.schemas import AttractionSchema
from convey.core.services import get_attraction, list_attractions
from convey.database.deps import AsyncSessionDep
from fastapi import APIRouter, Response, status

router_v1 = APIRouter()


@router_v1.get("/attractions", response_model=List[AttractionSchema])
async def attractions_list(session: AsyncSessionDep):
    attractions = await list_attractions(session)

    return attractions


@router_v1.get(
    "/attractions/{attraction_id}",
    response_model=AttractionSchema | None,
    status_code=status.HTTP_200_OK,
)
async def attractions_detail(
    attraction_id: int, response: Response, session: AsyncSessionDep
):
    attraction = await get_attraction(session, attraction_id)

    if attraction is None:
        response.status_code = status.HTTP_404_NOT_FOUND
        return attraction

    return attraction
