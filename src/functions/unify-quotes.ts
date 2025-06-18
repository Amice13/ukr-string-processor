const quotesPattern = /[“„«”»″\u201c\u201d]/g

export const unifyQuotes = (s: string): string => {
  return s.replace(quotesPattern, '"')
}
