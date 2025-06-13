const apostrophes = [
  '’',
  '‘',
  '′',
  'ʼ',
  '`',
  '´'
]
const apostrophesPattern = new RegExp(`(?<apostroph>[${apostrophes.join('')}])`, 'g')

export const unifyApostrophes = (s: string, replacement = '\''): string => {
  return s.replace(apostrophesPattern, replacement)
}
