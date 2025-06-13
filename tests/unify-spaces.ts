import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { unifySpaces } from '../src/functions/unify-spaces.ts'

describe('unifySpaces', () => {
  it('replaces various Unicode space characters with a standard space', () => {
    const input = 'a\u00A0b\u200Bc\uFEFFd'
    const expected = 'a b c d'
    assert.equal(unifySpaces(input), expected)
  })

  it('removes multiple consecutive spaces', () => {
    const input = 'a  b   c'
    const expected = 'a b c'
    assert.equal(unifySpaces(input), expected)
  })

  it('handles mixed regular and irregular space types', () => {
    const input = ' a\u2003\u2009\u00A0b\u3000c '
    const expected = ' a b c '
    assert.equal(unifySpaces(input), expected)
  })

  it('handles empty string', () => {
    assert.equal(unifySpaces(''), '')
  })

  it('preserves single surrounding spaces', () => {
    const input = ' foo '
    assert.equal(unifySpaces(input), ' foo ')
  })

  it('removes extra internal spaces only, not leading/trailing ones', () => {
    const input = '  foo   bar  '
    const expected = ' foo bar '
    assert.equal(unifySpaces(input), expected)
  })
})
