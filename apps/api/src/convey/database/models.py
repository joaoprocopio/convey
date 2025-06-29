import re
from datetime import datetime, timezone
from typing import Any

from sqlalchemy import DateTime, Integer, event
from sqlalchemy.ext.asyncio import AsyncAttrs, AsyncConnection
from sqlalchemy.orm import DeclarativeBase, Mapped, Mapper, declared_attr, mapped_column


def slugify_table_name(name: str) -> str:
    names = re.split("(?=[A-Z])", name)

    return "_".join([name.lower() for name in names if name])


# https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html#table-configuration-with-declarative
class Model(AsyncAttrs, DeclarativeBase):
    @declared_attr.directive
    def __tablename__(self):
        return slugify_table_name(self.__name__)

    @declared_attr
    def id(cls) -> Mapped[int]:
        return mapped_column(
            Integer,
            primary_key=True,
            autoincrement=True,
            index=True,
        )


class TimestampMixin(object):
    @declared_attr
    def created_at(cls) -> Mapped[datetime]:
        return mapped_column(
            DateTime(timezone=True),
            default=lambda: datetime.now(timezone.utc),
        )

    @declared_attr
    def updated_at(cls) -> Mapped[datetime]:
        return mapped_column(
            DateTime(timezone=True),
            default=lambda: datetime.now(timezone.utc),
            onupdate=datetime.now(timezone.utc),
        )

    @staticmethod
    def _updated_at(mapper: Mapper, connection: AsyncConnection, target: Any) -> None:
        target.updated_at = datetime.now(timezone.utc)

    @classmethod
    def __declare_last__(cls) -> None:
        event.listen(cls, "before_update", cls._updated_at)
