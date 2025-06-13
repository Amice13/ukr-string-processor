const spacePattern = /[\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u202F\u205F\u3000\uFEFF ]/g // eslint-disable-line no-irregular-whitespace

export const unifySpaces = (s: string): string => {
  return s.replace(spacePattern, ' ').replace(/ {2,}/g, ' ')
}
