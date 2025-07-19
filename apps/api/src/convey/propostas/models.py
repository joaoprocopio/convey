from convey.database.models import Model, TimestampMixin
from convey.propostas.enums import PropostaStatus
from sqlalchemy import Enum, String
from sqlalchemy.orm import Mapped, mapped_column


class Proposta(Model, TimestampMixin):
    name: Mapped[str] = mapped_column(String(255))
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    status: Mapped[PropostaStatus] = mapped_column(
        Enum(PropostaStatus), default=lambda: PropostaStatus.RASCUNHO
    )
