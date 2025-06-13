import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceFalseApostrophes } from '../src/functions/replace-false-apostrophes.ts'

describe('replaceFalseApostrophes', () => {
  it('replaces apostrophes after specific consonants before я, ю, є, ї (rule 1)', () => {
    assert.equal(replaceFalseApostrophes('бурʼян'), "бур'ян")
    assert.equal(replaceFalseApostrophes('п’єса'), "п'єса")
  })

  it('replaces apostrophes in Лук’ян and derivatives (rule 2)', () => {
    assert.equal(replaceFalseApostrophes('Лук´яненко'), "Лук'яненко")
    assert.equal(replaceFalseApostrophes('лук′ян'), "лук'ян")
  })

  it('replaces apostrophes after valid prefixes (rule 3)', () => {
    assert.equal(replaceFalseApostrophes('від’їзд'), "від'їзд")
    assert.equal(replaceFalseApostrophes('возз‘єднання'), "возз'єднання")
  })

  it('replaces apostrophes in foreign words after certain consonants (rule 4)', () => {
    assert.equal(replaceFalseApostrophes('Монтеск’є'), "Монтеск'є")
  })

  it('replaces apostrophes in proper names (rule 5)', () => {
    assert.equal(replaceFalseApostrophes('д»Арк'), "д'Арк")
    assert.equal(replaceFalseApostrophes('О’Хара'), "О'Хара")
  })

  it('handles mixed and unusual apostrophe variants', () => {
    assert.equal(replaceFalseApostrophes('бур’ян, бурʼян, бур“ян'), "бур'ян, бур'ян, бур'ян")
  })

  it('does not replace correct apostrophes elsewhere', () => {
    assert.equal(replaceFalseApostrophes("rock'n'roll"), "rock'n'roll")
    assert.equal(replaceFalseApostrophes("it's fine"), "it's fine")
  })

  it('returns the same string when no replacements are needed', () => {
    assert.equal(replaceFalseApostrophes('книга'), 'книга')
  })
})
