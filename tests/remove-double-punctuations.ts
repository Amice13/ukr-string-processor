import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { removeDoublePunctuations } from '../src/functions/remove-double-punctuations.ts'

describe('removeDoublePunctuations', () => {
  it('removes repeated commas', () => {
    assert.equal(removeDoublePunctuations('Привіт,, світ'), 'Привіт, світ')
  })

  it('removes repeated semicolons', () => {
    assert.equal(removeDoublePunctuations('Зачекай;;; що?'), 'Зачекай; що?')
  })

  it('removes repeated question marks', () => {
    assert.equal(removeDoublePunctuations('Дійсно???'), 'Дійсно?')
  })

  it('removes repeated exclamation marks', () => {
    assert.equal(removeDoublePunctuations('Круть!!'), 'Круть!')
  })

  it('does not modify ellipsis or single punctuation', () => {
    assert.equal(removeDoublePunctuations('Хм... можливо.'), 'Хм... можливо.')
    assert.equal(removeDoublePunctuations('Добре.'), 'Добре.')
  })

  it('removes repeated symbols from allowed set only', () => {
    assert.equal(removeDoublePunctuations('##Hashtag###'), '#Hashtag#')
    assert.equal(removeDoublePunctuations('Вартість:$$$'), 'Вартість:$')
  })

  it('handles multiple patterns in one string', () => {
    const input = 'Що,,, дійсно??!! ##Так##'
    const expected = 'Що, дійсно?! #Так#'
    assert.equal(removeDoublePunctuations(input), expected)
  })
})
