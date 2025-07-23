export type TEnumKey = PropertyKey

export type TEnum<GKey extends TEnumKey> = Record<TEnumKey, GKey>
