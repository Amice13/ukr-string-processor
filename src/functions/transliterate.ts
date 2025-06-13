const apostrophes = [
  '\'',
  '’',
  '‘',
  '′',
  'ʼ',
  '`',
  '´'
]
const replaceApostrophePattern = new RegExp(`(?<=[А-яЄІЇҐєіїґ])(?<apostroph>[${apostrophes.join('')}])(?=[А-яЄІЇҐєіїґ])`, 'gi')

const firstLetters: Record<string, string> = {
  Є: 'Ye',
  Ї: 'Yi',
  Й: 'Y',
  Ю: 'Yu',
  Я: 'Ya',
  є: 'ye',
  ї: 'yi',
  й: 'y',
  ю: 'yu',
  я: 'ya'
}

const otherLetters: Record<string, string> = {
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'H',
  Ґ: 'G',
  Д: 'D',
  Е: 'E',
  Є: 'Ie',
  Ж: 'Zh',
  З: 'Z',
  И: 'Y',
  І: 'I',
  Ї: 'I',
  Й: 'I',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'Kh',
  Ц: 'Ts',
  Ч: 'Ch',
  Ш: 'Sh',
  Щ: 'Shch',
  Ь: '',
  Ъ: '',
  Ы: 'Y',
  Э: 'E',
  Ю: 'Iu',
  Я: 'Ia',
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'h',
  ґ: 'g',
  д: 'd',
  е: 'e',
  є: 'ie',
  ж: 'zh',
  з: 'z',
  и: 'y',
  і: 'i',
  ї: 'i',
  й: 'i',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ь: '',
  ъ: '',
  ы: 'Y',
  э: 'E',
  ю: 'iu',
  я: 'ia'
}

const zgLetters: Record<string, string> = {
  Зг: 'Zgh',
  зг: 'zgh',
  ЗГ: 'ZGH'
}
const zgLettersPattern = /зг/gi
const firstLettersPattern = /(?<=^|[^а-яєіїґё])([єїйюя])(?=([а-яєіїґё])?)/gi
const allLetters = /[а-яєіїґ]/gi

export const transliterate = (s: string): string => {
  s = s.replace(replaceApostrophePattern, '')
  s = s.replace(zgLettersPattern, letter => zgLetters[letter])
  s = s.replace(firstLettersPattern, (_, ...groups) => {
    const letter = firstLetters[groups[0]]
    if (groups[1] !== undefined && /[А-ЯЄІЇҐ]/.test(groups[1])) return letter.toUpperCase()
    return letter
  })
  s = s.replace(/([єжхцчшщюя])(?=([а-яєіїґё])?|$)/gi, (_, ...groups) => {
    console.log(groups)
    const letter = otherLetters[groups[0]]
    if (groups[1] !== undefined && /[А-ЯЄІЇҐ]/.test(groups[1])) return letter.toUpperCase()
    if (/[ЄЖХЦЧШЩЮЯ]/.test(groups[0]) && groups[1] === undefined) return letter.toUpperCase()
    return letter
  })
  s = s.replace(allLetters, letter => otherLetters[letter])
  return s
}
