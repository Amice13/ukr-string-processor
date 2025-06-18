import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { unifyQuotes } from '../src/functions/unify-quotes.ts'

describe('unifyHyphens', () => {
  it('replaces all quotes with a standard one', () => {
    const input = '«Привіт», - сказав він'
    const expected = '"Привіт", - сказав він'
    assert.equal(unifyQuotes(input), expected)
  })

  it('replaces different kinds of quotes with a standard one', () => {
    const input = '“Так„, «чудово», ″впорався″'
    const expected = '"Так", "чудово", "впорався"'
    assert.equal(unifyQuotes(input), expected)
  })

  it('handles empty string', () => {
    assert.equal(unifyQuotes(''), '')
  })
})
