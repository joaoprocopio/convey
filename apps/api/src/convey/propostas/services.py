from typing import Sequence

from sqlalchemy import select

from convey.database.core import AsyncSession
from convey.propostas.models import Proposta


async def list_propostas(session: AsyncSession) -> Sequence[Proposta]:
    statement = select(Proposta).order_by(Proposta.created_at.desc())
    result = await session.execute(statement)

    return result.scalars().all()


async def get_proposta(session: AsyncSession, id: int) -> Proposta | None:
    statement = select(Proposta).where(Proposta.id == id)
    result = await session.execute(statement)

    return result.scalar_one_or_none()
