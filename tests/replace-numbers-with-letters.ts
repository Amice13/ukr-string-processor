import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceNumbersWithLetters } from '../src/functions/replace-numbers-with-letters.ts'

describe('replaceNumbersWithLetters', () => {
  it('replaces numbers surrounded by Cyrillic letters', () => {
    assert.equal(replaceNumbersWithLetters('0льга'), 'Ольга')
    assert.equal(replaceNumbersWithLetters('1ндичка'), 'Індичка')
    assert.equal(replaceNumbersWithLetters('3оя'), 'Зоя')
    assert.equal(replaceNumbersWithLetters('До6ро'), 'Добро')
  })

  it('returns empty string if input is empty', () => {
    assert.equal(replaceNumbersWithLetters(''), '')
  })
})
