from fastapi import APIRouter

from convey.health.views import router_v1 as health_router_v1
from convey.propostas.views import router_v1 as propostas_router_v1

api_v1 = APIRouter()


api_v1.include_router(propostas_router_v1, prefix="/propostas")
api_v1.include_router(health_router_v1, prefix="/health")
