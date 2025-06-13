const falseQuote = /(?<mark>[’‘ʼ′`´])\k<mark>|,,(?=[A-ZА-ЯЄІЇҐЁ])/g

export const replaceFalseQuotes = (s: string): string => {
  return s.replace(falseQuote, '"')
}
