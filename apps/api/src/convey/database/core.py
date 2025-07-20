from typing import AsyncGenerator

import orjson
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from convey.config import IS_DEV, POSTGRES_URL

async_engine: AsyncEngine = create_async_engine(
    POSTGRES_URL,
    echo=IS_DEV,
    echo_pool=IS_DEV,
    pool_pre_ping=True,
    json_deserializer=orjson.loads,
    json_serializer=orjson.dumps,
)
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
