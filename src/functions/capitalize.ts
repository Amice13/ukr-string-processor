export const capitalize = (s: string): string => {
  s = s.toLowerCase()
  return s.replace(/(?<=^)./g, (letter: string): string => letter.toUpperCase())
}
