# from contextlib import asynccontextmanager
# from typing import AsyncIterator

from fastapi import FastAPI
from fastapi.responses import ORJSONResponse
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.gzip import GZipMiddleware

from convey.api import api_v1

# from convey.database.core import async_engine
# from convey.database.models import Model


# @asynccontextmanager
# async def lifespan(_: FastAPI) -> AsyncIterator[None]:
#     async with async_engine.begin() as conn:
#         try:
#             await conn.run_sync(Model.metadata.create_all)  # gambiarrinha d levs
#             yield
#         except Exception:
#             await conn.rollback()


app = FastAPI(
    # lifespan=lifespan,
    default_response_class=ORJSONResponse,
)


app.add_middleware(GZipMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_v1, prefix="/api/v1")
