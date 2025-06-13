# Text Utilities for Ukrainian & Multilingual Processing

A comprehensive collection of text processing utilities focused on Ukrainian language specifics, typographical normalization, transliteration, and general string cleanup.

---

## Installation

```bash
npm install ukr-string-processor
```

---

## Overview

This package provides a set of utilities to:

* Normalize typography (spaces, hyphens, quotes, apostrophes, ellipses, and punctuation)
* Fix and unify common text input issues (keyboard layouts, false apostrophes, false quotes)
* Convert between Cyrillic and Latin alphabets, including smart transliteration tailored for Ukrainian
* Capitalize and format strings with language-specific rules
* Replace numbers with their letter equivalents
* Trim and clean text with strict rules for whitespace

Our team used these scripts to clean up the files converted into markdown.

| Function                     | Description                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| `fixRomeNumbers`             | Replaces Ukrainian characters in Roman numerals in text.                                          |
| `replaceEllipsis`            | Replaces sequences of dots with a proper ellipsis character.                                      |
| `toTitleCase`                | Converts string to title case respecting Ukrainian letters and apostrophes.                       |
| `unifySpaces`                | Normalizes various Unicode space characters to a regular space and collapses multiples.           |
| `unifyHyphens`               | Replaces different hyphen and dash characters with a standard ASCII hyphen `-`.                   |
| `replaceUnnecessarySpaces`   | Removes extra spaces where not needed, especially near punctuation.                               |
| `replaceFalseQuotes`         | Fixes misuse of quote characters, replacing them with typographically correct ones.               |
| `unifyApostrophes`           | Replaces multiple apostrophe-like characters with a single standard apostrophe `'`.               |
| `fixSpacesNearQuotes`        | Corrects spacing issues around quotation marks.                                                   |
| `replaceLatinWithCyryllic`   | Replaces **all** Latin letters that look like Cyrillic with their Cyrillic counterparts.          |
| `removeDoublePunctuations`   | Removes duplicated punctuation marks in the text.                                                 |
| `regexLatinToCyryllic`       | Provides a regex for matching Cyryllic words by a word transliterated into Latin.                 |
| `transliterate`              | Converts Ukrainian Cyrillic text into Latin script using official transliteration rules.          |
| `strictTrim`                 | Trims strings strictly, removing various Unicode space characters and collapsing multiple spaces. |
| `replaceFalseApostrophes`    | Fixes apostrophes that are visually similar but incorrect for Ukrainian text.                     |
| `capitalize`                 | Capitalizes the first letter of a string, respecting language-specific rules.                     |
| `replaceRuWithUk`            | Replaces Russian letters mistakenly typed with the wrong keyboard layout.                         |
| `changeKeyboardLayoutEnToUk` | Converts English keyboard layout typed text to Ukrainian layout (e.g., "ghbdsn" → "привіт").      |
| `replaceLatinSmart`          | Smart replacement of Latin characters within Cyrillic text, preventing false replacements.        |
| `replaceCyryllicWithLatin`   | Replaces **all** Cyrillic characters with visually similar Latin characters.                      |
| `replaceLatinInCyryllic`     | Replaces Latin letters that appear inside Cyrillic text with proper Cyrillic letters.             |
| `fixSpacesNearPunctuations`  | Corrects spaces around punctuation marks for proper typography.                                   |
| `replaceNumbersWithLetters`  | Converts digits into their spelled-out letter equivalents (e.g. "3оя" → "Зоя".                    |

---

## Usage

```ts
import { unifySpaces, transliterate, toTitleCase } from 'ukr-string-processor'

const rawText = "Привіт– світе…  Це   тест"

const cleanedText = unifySpaces(rawText)  
// "Привіт- світе… Це тест"

const translit = transliterate(cleanedText)
// "Pryvit- svite… Tse test"

const title = toTitleCase(translit)
// "Pryvit- Svite… Tse Test"

console.log(title)
```

---

## Contributing

Contributions and suggestions are welcome! Please open issues or pull requests on the GitHub repository.

