from datetime import datetime

from convey.config import SRID
from convey.core.enums import FestivalStatus
from convey.database.models import Model, TimestampMixin
from geoalchemy2 import Geometry, WKBElement
from sqlalchemy import DateTime, Enum, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Attraction(Model, TimestampMixin):
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(255))


class FestivalPeriod(Model):
    at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    thumbnail_url: Mapped[str] = mapped_column(String(500))


class Festival(Model, TimestampMixin):
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    thumbnail_url: Mapped[str] = mapped_column(String(500))
    location: Mapped[WKBElement] = mapped_column(
        Geometry(geometry_type="POINT", srid=SRID)
    )
    bbox: Mapped[WKBElement] = mapped_column(
        Geometry(geometry_type="POLYGON", srid=SRID),
    )
    status: Mapped[FestivalStatus] = mapped_column(
        Enum(FestivalStatus), default=lambda: FestivalStatus.DRAFT
    )
    period_start_id: Mapped[int] = mapped_column(ForeignKey(FestivalPeriod.id))
    period_start: Mapped[FestivalPeriod] = relationship(foreign_keys=[period_start_id])
    period_end_id: Mapped[int] = mapped_column(ForeignKey(FestivalPeriod.id))
    period_end: Mapped[FestivalPeriod] = relationship(foreign_keys=[period_end_id])
    attraction_id: Mapped[int] = mapped_column(ForeignKey(Attraction.id))
    attraction: Mapped["Attraction"] = relationship()
