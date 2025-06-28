from fastapi import APIRouter

from convey.core.views import router_v1 as core_router_v1
from convey.health.views import router_v1 as health_router_v1

api_v1 = APIRouter()


api_v1.include_router(core_router_v1, prefix="/core")
api_v1.include_router(health_router_v1, prefix="/health")
