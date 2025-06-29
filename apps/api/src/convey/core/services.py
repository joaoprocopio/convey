from typing import Sequence

from convey.core.models import Atracao
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


async def list_attractions(session: AsyncSession) -> Sequence[Atracao]:
    statement = select(Atracao).order_by(Atracao.created_at.desc())
    result = await session.execute(statement)

    return result.scalars().all()


async def get_attraction(session: AsyncSession, id: int) -> Atracao | None:
    statement = select(Atracao).where(Atracao.id == id)
    result = await session.execute(statement)

    return result.scalar_one_or_none()
