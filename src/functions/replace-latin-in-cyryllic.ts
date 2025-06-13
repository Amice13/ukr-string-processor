const latin = '[ABCEHIKMOPTXaceiopyx]'
const ukr = '[а-яєіїґ]'
const anyLetter = '[a-zа-яєіїґ]'
const notLetter = '[^a-zа-яєіїґ]'

const latinToCyrillic: Record<string, string> = {
  A: 'А',
  B: 'В',
  C: 'С',
  E: 'Е',
  H: 'Н',
  I: 'І',
  K: 'К',
  M: 'М',
  O: 'О',
  P: 'Р',
  T: 'Т',
  X: 'Х',
  a: 'а',
  c: 'с',
  e: 'е',
  i: 'і',
  o: 'о',
  p: 'р',
  y: 'у',
  x: 'х'
}

const latinPattern = /[ABCEHIKMOPTXaceiopyx]/g

const latinInCyryllicPattern = new RegExp(`(?<=^|${notLetter})(?:${ukr}+${latin}${anyLetter}*|${latin}+${ukr}${anyLetter}*)`, 'gi')

export const replaceLatinInCyryllic = (s: string): string => {
  return s.replace(latinInCyryllicPattern, (word: string): string => {
    return word.replace(latinPattern, (letter: string): string => latinToCyrillic[letter])
  })
}
