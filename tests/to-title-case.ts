import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { toTitleCase } from '../src/functions/to-title-case.ts'

describe('toTitleCase', () => {
  it('capitalizes the first letter of a simple word', () => {
    assert.equal(toTitleCase('тест'), 'Тест')
  })

  it('capitalizes each word in a sentence', () => {
    assert.equal(toTitleCase('це речення з кількох слів'), 'Це Речення З Кількох Слів')
  })

  it('handles uppercase input', () => {
    assert.equal(toTitleCase('ЦЕ ТЕКСТ'), 'Це Текст')
  })

  it('handles mixed case input', () => {
    assert.equal(toTitleCase('нАпРиКлАд оТаК'), 'Наприклад Отак')
  })

  it('preserves apostrophes within words', () => {
    assert.equal(toTitleCase('Солов\'їна'), 'Солов\'їна')
  })

  it('handles non-letter characters correctly', () => {
    assert.equal(toTitleCase('...текст!!! інший??'), '...Текст!!! Інший??')
  })

  it('handles empty string', () => {
    assert.equal(toTitleCase(''), '')
  })

  it('preserves digits and symbols', () => {
    assert.equal(toTitleCase('123тест текст@2025'), '123Тест Текст@2025')
  })

  it('capitalizes words after punctuation and whitespace', () => {
    assert.equal(toTitleCase('текст.\nдругий рядок! третій?'), 'Текст.\nДругий Рядок! Третій?')
  })
})
