const cyrillicToLatin: Record<string, string> = {
  А: 'A',
  В: 'B',
  С: 'C',
  Е: 'E',
  Н: 'H',
  І: 'I',
  К: 'K',
  М: 'M',
  О: 'O',
  Р: 'P',
  Т: 'T',
  Х: 'X',
  а: 'a',
  с: 'c',
  е: 'e',
  і: 'i',
  о: 'o',
  р: 'p',
  у: 'y',
  х: 'x'
}

const cyryllicPattern = /[АВСЕНІКМОРТХасеіорух]/g

export const replaceCyryllicWithLatin = (s: string): string => {
  return s.replace(cyryllicPattern, (letter: string): string => cyrillicToLatin[letter])
}
