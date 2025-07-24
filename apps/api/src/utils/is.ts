export function isArray<T>(subject: unknown): subject is Array<T> {
  return Array.isArray(subject)
}
