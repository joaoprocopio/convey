from typing import Annotated

from convey.database.core import get_async_session
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

AsyncSessionDep = Annotated[AsyncSession, Depends(get_async_session)]
