from fastapi import APIRouter

router_v1 = APIRouter()


@router_v1.get("/")
async def core_index():
    return {
        "module": "core",
    }
