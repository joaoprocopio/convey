from sqlalchemy import Enum, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from convey.auth.models import User
from convey.database.models import Model, TimestampMixin
from convey.propostas.enums import PropostaStatus


class Proposta(Model, TimestampMixin):
    name: Mapped[str] = mapped_column(String(255))
    status: Mapped[PropostaStatus] = mapped_column(
        Enum(PropostaStatus), default=lambda: PropostaStatus.BACKLOG
    )
    assignee_id: Mapped[int] = mapped_column(ForeignKey(User.id))
    assignee: Mapped[User] = relationship()


class PropostaAttachment(Model):
    url: Mapped[str] = mapped_column(String(500))
