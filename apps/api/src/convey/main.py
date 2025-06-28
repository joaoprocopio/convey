from fastapi import FastAPI

api = FastAPI()


@api.get("/")
async def root():
    return {
        "hello": "world",
    }
