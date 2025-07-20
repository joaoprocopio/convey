from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from convey.database.models import Model


class User(Model):
    email: Mapped[str] = mapped_column(String(255))
