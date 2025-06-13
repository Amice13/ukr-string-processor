import { replaceLatinWithCyryllic } from './replace-latin-with-cyryllic.ts'
import { replaceCyryllicWithLatin } from './replace-cyryllic-with-latin.ts'

const anyLetter = '[a-zа-яєіїґ]'
const notLetter = '[^a-zа-яєіїґ]'

const nonCyryllicLatin = /[DFGJLQRSUVWYZbdfgjhlmnqrstuvwz]/g
const nonLatinCyryllic = /[БГҐДЖЗЁИЙЛПФЦЧШЩЭЮЯЄЇбгджзёїйлфцчшщєюяє]/g

const mixedCyrLat = new RegExp(`(?<=^|${notLetter})(?:[a-z]+[а-яєіїґ]${anyLetter}*|[а-яєіїґ]+[a-z]${anyLetter}*)`, 'gi')

export const replaceLatinSmart = (s: string): string => {
  s = s.replace(mixedCyrLat, (word: string): string => {
    const nonLatinSymbolsInWord = word.match(nonLatinCyryllic)
    if (nonLatinSymbolsInWord !== null && nonLatinSymbolsInWord.length > 2) return replaceLatinWithCyryllic(word)

    const nonCyryllicSymbolsInWord = word.match(nonCyryllicLatin)
    if (nonCyryllicSymbolsInWord !== null && nonCyryllicSymbolsInWord?.length > 2) return replaceCyryllicWithLatin(word)

    const allLatins = word.match(/[a-z]/gi)
    const allCyryllics = word.match(/[а-яєіїґ]/gi)
    const numberOfLatins = allLatins === null ? 0 : allLatins.length
    const numberOfCyryllic = allCyryllics === null ? 0 : allCyryllics.length

    if (numberOfCyryllic >= numberOfLatins) return replaceLatinWithCyryllic(word)
    return replaceCyryllicWithLatin(word)
  })
  return s
}
