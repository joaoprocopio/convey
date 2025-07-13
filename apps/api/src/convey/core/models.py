from datetime import datetime

from convey.core.enums import FestivalStatus
from convey.database.models import Model, TimestampMixin
from sqlalchemy import DateTime, Enum, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Atracao(Model, TimestampMixin):
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    nome: Mapped[str] = mapped_column(String(255))


class ShowPeriodoData(Model):
    at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    thumbnail_url: Mapped[str] = mapped_column(String(500))


class ShowPeriodo(Model):
    inicio_id: Mapped[int] = mapped_column(ForeignKey(ShowPeriodoData.id))
    inicio: Mapped[ShowPeriodoData] = relationship(foreign_keys=[inicio_id])
    fim_id: Mapped[int] = mapped_column(ForeignKey(ShowPeriodoData.id))
    fim: Mapped[ShowPeriodoData] = relationship(foreign_keys=[fim_id])


class Show(Model, TimestampMixin):
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    nome: Mapped[str] = mapped_column(String(255))
    thumbnail_url: Mapped[str] = mapped_column(String(500))
    status: Mapped[FestivalStatus] = mapped_column(
        Enum(FestivalStatus), default=lambda: FestivalStatus.RASCUNHO
    )
    periodo_id: Mapped[int] = mapped_column(ForeignKey(ShowPeriodo.id))
    periodo: Mapped[ShowPeriodo] = relationship()
    atracao_id: Mapped[int] = mapped_column(ForeignKey(Atracao.id))
    atracao: Mapped["Atracao"] = relationship()
