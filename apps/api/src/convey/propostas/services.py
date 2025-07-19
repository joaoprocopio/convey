from typing import Sequence

from convey.propostas.models import Proposta
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


async def list_propostas(session: AsyncSession) -> Sequence[Proposta]:
    statement = select(Proposta).order_by(Proposta.created_at.desc())
    result = await session.execute(statement)

    return result.scalars().all()


async def get_proposta(session: AsyncSession, id: int) -> Proposta | None:
    statement = select(Proposta).where(Proposta.id == id)
    result = await session.execute(statement)

    return result.scalar_one_or_none()
