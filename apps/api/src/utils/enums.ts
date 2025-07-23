export type TEnumExtraData = object

export type TEnumKey = PropertyKey

export type TEnum<GKey extends TEnumKey> = Record<string, GKey>
