from enum import StrEnum, auto


class FestivalStatus(StrEnum):
    DRAFT = auto()
    PAST = auto()
    UPCOMING = auto()
    ONGOING = auto()
    FINISHED = auto()
