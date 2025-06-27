import type { Component } from "vue";

export function isComp(value: unknown): value is Component {
  return (
    !isNil(value) &&
    // @ts-expect-error `setup` e `render` são funções privadas dentro do Vue, não existe um tipo exposto
    (isFn(value?.setup) || isFn(value?.render))
  );
}

export function isNil(value: unknown): value is null | undefined {
  return value == null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFn(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function";
}

export function isNumber(value: unknown): value is number {
  return Number.isFinite(parseInt(value as string));
}
