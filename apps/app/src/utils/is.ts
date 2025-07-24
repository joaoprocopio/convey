import type { Component } from 'vue'

export function isEmpty(value: unknown): boolean {
  if (isNil(value)) {
    return true
  }

  if (isArray(value) || isString(value)) {
    return !value.length
  }

  if (value instanceof Map || value instanceof Set) {
    return !value.size
  }

  for (const key in value as object) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false
    }
  }

  return true
}

export function isArray<T>(array: unknown): array is Array<T> {
  return Array.isArray(array)
}

export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String
}

export function isComp(value: unknown): value is Component {
  return (
    !isNil(value) &&
    // @ts-expect-error `setup` e `render` são funções privadas dentro do Vue, não existe um tipo exposto
    (isFn(value?.setup) || isFn(value?.render))
  )
}

export function isNil(value: unknown): value is null | undefined {
  return value == null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFn(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function'
}

export function isNumber(value: unknown): value is number {
  return Number.isFinite(parseInt(value as string))
}

export function isStr(value: unknown): value is string {
  return typeof value === 'string'
}
