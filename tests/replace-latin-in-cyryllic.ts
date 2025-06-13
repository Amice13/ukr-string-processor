import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceLatinInCyryllic } from '../src/functions/replace-latin-in-cyryllic.ts'

describe('replaceLatinInCyryllic', () => {
  it('replaces Latin letters inside words', () => {
    assert.equal(replaceLatinInCyryllic('пOмилка'), 'пОмилка')
    assert.equal(replaceLatinInCyryllic('відПOвідь'), 'відПОвідь')
    assert.equal(replaceLatinInCyryllic('адреса на вул. Cічова'), 'адреса на вул. Січова')
    assert.equal(replaceLatinInCyryllic('Київ, вул. МазеПи'), 'Київ, вул. МазеПи')
  })

  it('respects non-letter boundaries', () => {
    assert.equal(replaceLatinInCyryllic('!Cтудент сказав Oкей!'), '!Студент сказав Окей!')
    assert.equal(replaceLatinInCyryllic('(пOxвaлa)'), '(пОхвала)')
  })

  it('handles empty string and no matches', () => {
    assert.equal(replaceLatinInCyryllic(''), '')
    assert.equal(replaceLatinInCyryllic('12345!@#$%'), '12345!@#$%')
  })

  it('is case sensitive for replacement', () => {
    assert.equal(replaceLatinInCyryllic('ПeРeВiРкA'), 'ПеРеВіРкА')
  })
})
