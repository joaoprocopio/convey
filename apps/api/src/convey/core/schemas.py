from datetime import datetime

from pydantic import BaseModel


class AttractionSchema(BaseModel):
    id: int
    name: str
    slug: str
    created_at: datetime
    updated_at: datetime
