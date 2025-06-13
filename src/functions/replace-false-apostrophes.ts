const targetVowels = ['я', 'ю', 'є', 'ї']
const targetVowelsPattern = `[${targetVowels.join('')}]`

const targetConsonants = ['б', 'п', 'в', 'м', 'ф', 'р']
const targetConsonantsPattern = `[${targetConsonants.join('')}]`

const otherConsonants = ['г', 'ґ', 'д', 'ж', 'з', 'к', 'н', 'т', 'х', 'ч', 'ш']
const otherConsonantsPattern = `[${otherConsonants.join('')}]`

const apostrophes = [
  '\\*',
  '’',
  '‘',
  '′',
  'ʼ',
  '`',
  '´',
  '“',
  '”',
  '«',
  '»',
  '″',
  '"',
  '\\?'
]
const apostrophesPattern = `(?<apostroph>[${apostrophes.join('')}])`

const prefixes = [
  'з',
  'без',
  'безз',
  'від',
  'воз',
  'возз',
  'роз',
  'розз',
  'через',
  'од',
  'між',
  'над',
  'об',
  'під',
  'перед',
  'понад'
]
const prefixesPattern = `(?:${prefixes.join('|')})`

// Before 'я', 'ю', 'є', 'ї' and after 'б', 'п', 'в', 'м', 'ф' and 'р'
const rule1Pattern = new RegExp(`(?<=${targetConsonantsPattern})${apostrophesPattern}(?=${targetVowelsPattern})`, 'gi')
// Name Лук'ян and all derivatives
const rule2Pattern = new RegExp(`(?<=лук)${apostrophesPattern}(?=ян)`, 'gi')
// Apostrophe after prefixes
const rule3Pattern = new RegExp(`(?<=(?:^|[^а-яєіїґ])${prefixesPattern})${apostrophesPattern}(?=${targetVowelsPattern})`, 'gi')
// Apostrophes in words of foreign origin
const rule4Pattern = new RegExp(`(?<=(?:^|[^а-яєіїґ])[а-яєіїґ]{3,}${otherConsonantsPattern})${apostrophesPattern}(?=${targetVowelsPattern})`, 'gi')
// Apostorphes with proper names
const rule5Pattern = new RegExp(`(?<=(?:^|[^а-яєіїґ])[а-яєіїґ])${apostrophesPattern}(?=[а-яєіїґ])`, 'gi')

export const replaceFalseApostrophes = (s: string): string => {
  s = s.replace(rule1Pattern, '\'')
  s = s.replace(rule2Pattern, '\'')
  s = s.replace(rule3Pattern, '\'')
  s = s.replace(rule4Pattern, '\'')
  s = s.replace(rule5Pattern, '\'')
  return s
}
