import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { unifyApostrophes } from '../src/functions/unify-apostrophes.ts'

describe('unifyApostrophes', () => {
  it('replaces all false apostrophes with default apostrophe', () => {
    const input = 'м’ясо в‘юн п′є'
    const expected = 'м\'ясо в\'юн п\'є'
    assert.equal(unifyApostrophes(input), expected)
  })

  it('respects custom replacement string', () => {
    const input = 'бур’ян'
    const expected = 'бур`ян'
    assert.equal(unifyApostrophes(input, '`'), expected)
  })

  it('returns string unchanged if no false apostrophes found', () => {
    const input = 'зв\'язок'
    assert.equal(unifyApostrophes(input), input)
  })

  it('handles empty string gracefully', () => {
    assert.equal(unifyApostrophes(''), '')
  })

  it('works with multiple apostrophes in mixed context', () => {
    const input = 'В’юн п’є воду'
    const expected = 'В\'юн п\'є воду'
    assert.equal(unifyApostrophes(input), expected)
  })
})
