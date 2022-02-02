export const isClient = () => {
  const result = typeof window === 'object'
  if (!result) {
    return false
  }
  return true
}
