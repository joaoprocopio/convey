from enum import StrEnum


class FestivalStatus(StrEnum):
    DRAFT = "draft"
    PAST = "past"
    UPCOMING = "upcoming"
    ONGOING = "ongoing"
    FINISHED = "finished"
