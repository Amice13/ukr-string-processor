import { capitalize } from './functions/capitalize.ts'
import { changeKeyboardLayoutEnToUk } from './functions/change-keyboard-layout-en-to-uk.ts'
import { fixRomeNumbers } from './functions/fix-rome-numbers.ts'
import { fixSpacesNearPunctuations } from './functions/fix-spaces-near-punctuations.ts'
import { fixSpacesNearQuotes } from './functions/fix-spaces-near-quotes.ts'
import { regexLatinToCyryllic } from './functions/regex-latin-to-cyryllic.ts'
import { removeDoublePunctuations } from './functions/remove-double-punctuations.ts'
import { removeSpacesNearApostrophes } from './functions/remove-spaces-near-apostrophes.ts'
import { replaceCyryllicWithLatin } from './functions/replace-cyryllic-with-latin.ts'
import { replaceEllipsis } from './functions/replace-ellipsis.ts'
import { replaceFalseApostrophes } from './functions/replace-false-apostrophes.ts'
import { replaceFalseQuotes } from './functions/replace-false-quotes.ts'
import { replaceLatinInCyryllic } from './functions/replace-latin-in-cyryllic.ts'
import { replaceLatinSmart } from './functions/replace-latin-smart.ts'
import { replaceLatinWithCyryllic } from './functions/replace-latin-with-cyryllic.ts'
import { replaceNumbersWithLetters } from './functions/replace-numbers-with-letters.ts'
import { replaceRuWithUk } from './functions/replace-ru-with-uk.ts'
import { replaceUnnecessarySpaces } from './functions/replace-unnecessary-spaces.ts'
import { strictTrim } from './functions/strict-trim.ts'
import { toTitleCase } from './functions/to-title-case.ts'
import { transliterate } from './functions/transliterate.ts'
import { unifyApostrophes } from './functions/unify-apostrophes.ts'
import { unifyHyphens } from './functions/unify-hyphens.ts'
import { unifyQuotes } from './functions/unify-quotes.ts'
import { unifySpaces } from './functions/unify-spaces.ts'

export {
  capitalize,
  changeKeyboardLayoutEnToUk,
  fixRomeNumbers,
  fixSpacesNearPunctuations,
  fixSpacesNearQuotes,
  regexLatinToCyryllic,
  removeDoublePunctuations,
  removeSpacesNearApostrophes,
  replaceCyryllicWithLatin,
  replaceEllipsis,
  replaceFalseApostrophes,
  replaceFalseQuotes,
  replaceLatinInCyryllic,
  replaceLatinSmart,
  replaceLatinWithCyryllic,
  replaceNumbersWithLetters,
  replaceRuWithUk,
  replaceUnnecessarySpaces,
  strictTrim,
  toTitleCase,
  transliterate,
  unifyApostrophes,
  unifyHyphens,
  unifyQuotes,
  unifySpaces
}
