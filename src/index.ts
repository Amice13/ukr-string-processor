import { fixRomeNumbers } from './functions/fix-rome-numbers.ts'
import { replaceEllipsis } from './functions/replace-ellipsis.ts'
import { toTitleCase } from './functions/to-title-case.ts'
import { unifySpaces } from './functions/unify-spaces.ts'
import { unifyHyphens } from './functions/unify-hyphens.ts'
import { replaceUnnecessarySpaces } from './functions/replace-unnecessary-spaces.ts'
import { replaceFalseQuotes } from './functions/replace-false-quotes.ts'
import { unifyApostrophes } from './functions/unify-apostrophes.ts'
import { fixSpacesNearQuotes } from './functions/fix-spaces-near-quotes.ts'
import { replaceLatinWithCyryllic } from './functions/replace-latin-with-cyryllic.ts'
import { removeDoublePunctuations } from './functions/remove-double-punctuations.ts'
import { regexLatinToCyryllic } from './functions/regex-latin-to-cyryllic.ts'
import { transliterate } from './functions/transliterate.ts'
import { strictTrim } from './functions/strict-trim.ts'
import { replaceFalseApostrophes } from './functions/replace-false-apostrophes.ts'
import { capitalize } from './functions/capitalize.ts'
import { replaceRuWithUk } from './functions/replace-ru-with-uk.ts'
import { changeKeyboardLayoutEnToUk } from './functions/change-keyboard-layout-en-to-uk.ts'
import { replaceLatinSmart } from './functions/replace-latin-smart.ts'
import { replaceCyryllicWithLatin } from './functions/replace-cyryllic-with-latin.ts'
import { replaceLatinInCyryllic } from './functions/replace-latin-in-cyryllic.ts'
import { fixSpacesNearPunctuations } from './functions/fix-spaces-near-punctuations.ts'
import { replaceNumbersWithLetters } from './functions/replace-numbers-with-letters.ts'

export {
  fixRomeNumbers,
  replaceEllipsis,
  toTitleCase,
  unifySpaces,
  unifyHyphens,
  replaceUnnecessarySpaces,
  replaceFalseQuotes,
  unifyApostrophes,
  fixSpacesNearQuotes,
  replaceLatinWithCyryllic,
  removeDoublePunctuations,
  regexLatinToCyryllic,
  transliterate,
  strictTrim,
  replaceFalseApostrophes,
  capitalize,
  replaceRuWithUk,
  changeKeyboardLayoutEnToUk,
  replaceLatinSmart,
  replaceCyryllicWithLatin,
  replaceLatinInCyryllic,
  fixSpacesNearPunctuations,
  replaceNumbersWithLetters
}
