import re

from sqlalchemy import Integer
from sqlalchemy.ext.asyncio import AsyncAttrs
from sqlalchemy.orm import DeclarativeBase, Mapped, declared_attr, mapped_column


def slugify_table_name(name: str) -> str:
    names = re.split("(?=[A-Z])", name)
    return "_".join([name.lower() for name in names if name])


# https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html#table-configuration-with-declarative
class Model(AsyncAttrs, DeclarativeBase):
    id: Mapped[int] = mapped_column(
        Integer, autoincrement=True, primary_key=True, index=True, nullable=False
    )

    @declared_attr
    def __tablename__(self):
        return slugify_table_name(self.__name__)
