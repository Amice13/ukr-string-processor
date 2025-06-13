import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceCyryllicWithLatin } from '../src/functions/replace-cyryllic-with-latin.ts'

describe('replaceCyryllicWithLatin', () => {
  it('replaces single Cyrillic letters with Latin lookalikes', () => {
    assert.equal(replaceCyryllicWithLatin('АВСЕНІКМОРТХ'), 'ABCEHIKMOPTX')
    assert.equal(replaceCyryllicWithLatin('асеіорух'), 'aceiopyx')
  })

  it('does not affect non-lookalike Cyrillic letters', () => {
    assert.equal(replaceCyryllicWithLatin('ДЖЗЛ'), 'ДЖЗЛ')
  })

  it('preserves Latin letters and ignores non-Cyrillic characters', () => {
    assert.equal(replaceCyryllicWithLatin('TEST123'), 'TEST123')
    assert.equal(replaceCyryllicWithLatin('Привіт, world!'), 'Пpивiт, world!')
  })

  it('handles mixed strings', () => {
    const input = 'АБВГД абвгд ТЕSТ тест'
    const expected = 'AБBГД aбвгд TEST тecт'
    assert.equal(replaceCyryllicWithLatin(input), expected)
  })

  it('returns empty string when input is empty', () => {
    assert.equal(replaceCyryllicWithLatin(''), '')
  })

  it('is idempotent for pure Latin input', () => {
    const input = 'Hello, World!'
    assert.equal(replaceCyryllicWithLatin(input), input)
  })
})

// actual: 'AБBГД aбвгд TEST тecт',
//     expected: 'AБВГД aбвгд TEST тeст',