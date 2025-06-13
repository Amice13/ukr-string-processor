// Dot is not included, because of ellipsis presence
const doublePunctuationPattern = /(?<p>[,:;?!#$])\k<p>{1,}/gi

export const removeDoublePunctuations = (s: string): string => {
  return s.replace(doublePunctuationPattern, (p: string) => p[0])
}
