export type TEnumExtraData = object

export type TEnumKey = PropertyKey

export type TEnum<GKey extends TEnumKey, GExtraData extends TEnumExtraData> = {
  [GMappedKey in GKey]: { value: GMappedKey } & GExtraData
}
