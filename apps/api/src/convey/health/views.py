from fastapi import APIRouter

router_v1 = APIRouter()


@router_v1.get("/")
async def health_index():
    return {
        "status": "ok",
    }
