const targetVowels = ['я', 'ю', 'є', 'ї']
const allConsonants = ['б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'х', 'ц', 'ч', 'ш', 'ф']

const apostrophes = [
  '’',
  '‘',
  '′',
  'ʼ',
  '`',
  '´'
]
const apostrophesPattern = `[${apostrophes.join('')}]`
const consonantsPattern = `[${allConsonants.join('')}]`
const vowelsPattern = `[${targetVowels.join('')}]`

const replacementPattern = new RegExp(`(?<=${consonantsPattern})(?: ${apostrophesPattern}|${apostrophesPattern} )(?=${vowelsPattern})`)

export const removeSpacesNearApostrophes = (s: string, replacement = '\''): string => {
  return s.replace(replacementPattern, replacement)
}
