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

export const replaceLatinWithCyryllic = (s: string): string => {
  return s.replace(latinPattern, (letter: string): string => latinToCyrillic[letter])
}
