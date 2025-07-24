export type TEnumExtraData = object

export type TEnumKey = PropertyKey

export type TEnum<
  GKey extends TEnumKey,
  GExtraData extends TEnumExtraData = TEnumExtraData,
> = {
  [GMappedKey in GKey]: { value: GMappedKey } & GExtraData
}
