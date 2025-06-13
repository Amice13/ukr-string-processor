const spaces = /[\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u202F\u205F\u3000\uFEFF  ]+/g // eslint-disable-line
const multipleSpace = /[\t\v\f \u00a0\u2000-\u200b\u2028-\u2029\u3000]{2,}/g

export const replaceUnnecessarySpaces = (s: string): string => {
  s = s.replace(spaces, ' ')
  s = s.replace(multipleSpace, ' ')
  return s.replace(/\s+/, ' ').trim()
}
