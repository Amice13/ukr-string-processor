import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { fixSpacesNearQuotes } from '../src/functions/fix-spaces-near-quotes.ts'

describe('fixSpacesNearQuotes', () => {
  it('inserts space before opening « if missing', () => {
    assert.equal(fixSpacesNearQuotes('Це«тест»'), 'Це «тест»')
  })

  it('adds space after closing quote when followed by text', () => {
    assert.equal(fixSpacesNearQuotes('«тест»це правда'), '«тест» це правда')
    assert.equal(fixSpacesNearQuotes('“yes”indeed'), '“yes” indeed')
  })

  it('removes unnecessary space after opening quote', () => {
    assert.equal(fixSpacesNearQuotes('«  текст'), '«текст')
  })

  it('removes unnecessary space before closing quote', () => {
    assert.equal(fixSpacesNearQuotes('текст  »'), 'текст»')
  })

  it('removes excess space before quote when followed by punctuation', () => {
    assert.equal(fixSpacesNearQuotes('був «приклад ».'), 'був «приклад».')
  })

  it('fixes quote in the middle with excess space after space', () => {
    assert.equal(fixSpacesNearQuotes('Це "  Текст'), 'Це "Текст')
  })

  it('removes space before opening quote in the middle of a sentence', () => {
    assert.equal(fixSpacesNearQuotes('він сказав " так'), 'він сказав" так')
  })

  it('adds space before quote when following word with no punctuation', () => {
    assert.equal(fixSpacesNearQuotes('вінсказав"так'), 'вінсказав "так')
  })

  it('adds space after closing quote if needed', () => {
    assert.equal(fixSpacesNearQuotes('"привіт"як справи'), '"привіт" як справи')
  })

  it('fixes triple quote issues in compound quotes', () => {
    const input = 'Він сказав "Привіт"і пішов "Додому".'
    const expected = 'Він сказав "Привіт" і пішов "Додому".'
    assert.equal(fixSpacesNearQuotes(input), expected)
  })
})
