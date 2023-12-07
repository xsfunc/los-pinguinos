export function getRandom(min: number, max: number): number {
  return Math.floor($fx.rand() * (max - min + 1)) + min
}

export function sample<T>(array: T[]): T | undefined {
  if (array.length === 0)
    return undefined
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
