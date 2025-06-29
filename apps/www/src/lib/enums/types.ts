export type TEnumExtraData = object;

export type TEnumKey = PropertyKey;

export type TEnum<GKey extends TEnumKey, GExtraData extends TEnumExtraData> = {
  // https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
  [GMappedKey in GKey]: { value: GMappedKey } & GExtraData;
};
