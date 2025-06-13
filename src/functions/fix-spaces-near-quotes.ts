const quoteWithoutSpaceStart = /(?<=[^ ])(«)/g
const quoteWithoutSpaceEnd = /([”»″\u201d])(?=[А-яЄІЇҐЁєіїґёa-z\d])/g
const quoteSpacePatternStart = /([“„«\u201c]) */g
const quoteSpacePatternEnd = / *([”»″\u201d])/g
const excessSpaceBeforeQuote = / +([“„«\u201c])(?=$|[.,:;?!)\]])/g
const quoteSpacePatternMiddle = /(?<= )" +(?=[А-ЯЄІЇҐЁA-Z\d])/g
const quoteSpacePatternMiddle2 = /(?<=[а-яєіїґёa-z\d]) "(?= +[а-яєіїґёa-z])/g
const noSpaceBeforeQuote = /(?<=(?:^|\.)[^."]+[а-яєіїґё\da-z])"(?=[а-яєіїґё\da-z])/gi
const noSpaceAfterQuote = /(?<=(?:^|\s)"[а-яєіїґё\da-z](?:(?![а-яєіїґё\da-z]" )[^ ])*)"(?=[а-яєіїґё\da-z])/gi
const trippleQuote = /(?<=(?:^|\s)"[А-яЄІЇҐЁєіїґё\d](?:(?![А-яЄІЇҐЁєіїґё\d]" +).)*)"(?=(?:(?![А-яЄІЇҐЁєіїґё\d]" ).)*[А-яЄІЇҐЁєіїґё\d]")/g

export const fixSpacesNearQuotes = (s: string): string => {
  s = s.replace(quoteWithoutSpaceStart, ' $1')
  s = s.replace(quoteWithoutSpaceEnd, '$1 ')
  s = s.replace(quoteSpacePatternStart, '$1')
  s = s.replace(quoteSpacePatternEnd, '$1')
  s = s.replace(excessSpaceBeforeQuote, '$1')
  s = s.replace(quoteSpacePatternMiddle, '"')
  s = s.replace(quoteSpacePatternMiddle2, '"')
  s = s.replace(trippleQuote, '"')
  s = s.replace(noSpaceBeforeQuote, ' "')
  s = s.replace(noSpaceAfterQuote, '" ')
  return s
}
