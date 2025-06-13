export const toTitleCase = (s: string): string => {
  s = s.toLowerCase()
  return s.replace(/(?<=^|[^а-яєіїґ'])./g, (letter: string): string => letter.toUpperCase())
}
