from typing import Annotated

from fastapi import Depends

from convey.database.core import AsyncSession, get_async_session

AsyncSessionDep = Annotated[AsyncSession, Depends(get_async_session)]
