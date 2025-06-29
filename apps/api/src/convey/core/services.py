from typing import Sequence

from convey.core.models import Attraction
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


async def list_attractions(session: AsyncSession) -> Sequence[Attraction]:
    statement = select(Attraction).order_by(Attraction.created_at.desc())
    result = await session.execute(statement)

    return result.scalars().all()


async def get_attraction(session: AsyncSession, id: int) -> Attraction | None:
    statement = select(Attraction).where(Attraction.id == id)
    result = await session.execute(statement)

    return result.scalar_one_or_none()
