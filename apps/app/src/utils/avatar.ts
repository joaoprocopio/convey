export function composeInitials(fullName: string): string {
  const parts = fullName.split(' ')
  const firstName = parts[0]
  const lastName = parts[parts.length - 1]
  const firstChar = firstName[0].toUpperCase()
  const lastChar = lastName[0].toUpperCase()

  return firstChar + lastChar
}
