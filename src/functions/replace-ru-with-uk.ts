const russianToUkraine: Record<string,string> = {
  Ы: 'І',
  Ъ: 'Ї',
  ы: 'і',
  ъ: 'ї',
  Ё: '\'',
  ё: '\''
}

const rusPattern = /[ЫЪЁыъё]/g

export const replaceRuWithUk = (s: string): string => {
  return s.replace(rusPattern, (letter: string): string => russianToUkraine[letter])
}
