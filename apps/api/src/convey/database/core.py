from typing import AsyncGenerator

from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from convey.config import POSTGRES_URL

__all__ = ["async_engine", "async_session", "get_async_session", "AsyncSession"]

async_engine: AsyncEngine = create_async_engine(POSTGRES_URL)
async_session: async_sessionmaker[AsyncSession] = async_sessionmaker(bind=async_engine)


async def get_async_session() -> AsyncGenerator[AsyncSession]:
    session = async_session()

    try:
        yield session
    except Exception:
        await session.rollback()
        raise
    finally:
        await session.close()
