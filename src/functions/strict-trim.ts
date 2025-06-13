const spaceChars = '[\\t\\v\\f \\u00a0\\u2000-\\u200b\\u2028-\\u2029\\u3000]'

const startSpace = new RegExp(`^${spaceChars}+`, 'gm')
const endSpace = new RegExp(`${spaceChars}+$`, 'gm')
const doubleSpace = new RegExp(`${spaceChars}{2,}`, 'g')

export const strictTrim = (s: string): string => {
  s = s.replace(startSpace, '')
  s = s.replace(endSpace, '')
  s = s.replace(doubleSpace, ' ')
  return s
}
