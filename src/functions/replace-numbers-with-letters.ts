const numbersToCyrillic: Record<string, string> = {
  0: 'О',
  1: 'І',
  3: 'З',
  6: 'б'
}

const numberInLettersPattern = /(?<=[а-яєіїґ])[0136](?=[а-яєіїґ])|[0136](?=[а-яєіїґ])|(?<=[а-яєіїґ])[0136]/g

export const replaceNumbersWithLetters = (s: string): string => {
  return s.replace(numberInLettersPattern, (letter: string): string => numbersToCyrillic[letter])
}
