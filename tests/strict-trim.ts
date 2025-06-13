import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { strictTrim } from '../src/functions/strict-trim.ts'

describe('strictTrim', () => {
  it('removes leading spaces', () => {
    assert.equal(strictTrim('  Hello'), 'Hello')
  })

  it('removes trailing spaces', () => {
    assert.equal(strictTrim('World  '), 'World') // Includes U+00A0
  })

  it('collapses multiple internal spaces into a single space', () => {
    assert.equal(strictTrim('Hi   there'), 'Hi there')
  })

  it('removes Unicode leading/trailing spaces', () => {
    const input = '\u2002\u2003Hello World\u2009\u200A'
    assert.equal(strictTrim(input), 'Hello World')
  })

  it('collapses mixed whitespace types internally', () => {
    const input = 'A\t\u2005\u2006\u2007B'
    assert.equal(strictTrim(input), 'A B')
  })

  it('preserves single space between words', () => {
    assert.equal(strictTrim('This is fine'), 'This is fine')
  })

  it('cleans multiline string correctly', () => {
    const input = `\u2003  Line 1  \n  Line 2   \nLine 3\u200A  `
    const expected = `Line 1\nLine 2\nLine 3`
    assert.equal(strictTrim(input), expected)
  })

  it('handles empty string', () => {
    assert.equal(strictTrim(''), '')
  })

  it('returns empty string for only whitespace', () => {
    assert.equal(strictTrim(' \u2005\u3000\u00A0 '), '')
  })
})
