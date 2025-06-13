import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceUnnecessarySpaces } from '../src/functions/replace-unnecessary-spaces.ts'

describe('replaceUnnecessarySpaces', () => {
  it('replaces multiple normal spaces', () => {
    assert.equal(replaceUnnecessarySpaces('a   b'), 'a b')
  })

  it('handles various unicode spaces', () => {
    assert.equal(replaceUnnecessarySpaces('a\u2009\u2009b\u00A0c'), 'a b c')
  })

  it('trims spaces from start and end', () => {
    assert.equal(replaceUnnecessarySpaces('  hello world  '), 'hello world')
  })

  it('collapses tabs and form feeds', () => {
    assert.equal(replaceUnnecessarySpaces('a\t\tb\f\f'), 'a b')
  })

  it('returns empty string for only whitespace', () => {
    assert.equal(replaceUnnecessarySpaces('  \u2007\t\n '), '')
  })
})
