import type { LucideIcon } from "lucide-vue-next";

export type UIEnumItem<UIEnumItemValue extends PropertyKey> = {
  icon: LucideIcon;
  title: string;
  value: UIEnumItemValue;
};

export type UIEnum<UIEnumItemValue extends PropertyKey> = Record<
  UIEnumItemValue,
  UIEnumItem<UIEnumItemValue>
>;
