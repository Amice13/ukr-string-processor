import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceLatinSmart } from '../src/functions/replace-latin-smart.ts'

describe('replaceLatinSmart', () => {
  it('converts visually ambiguous Latin letters in mostly Cyrillic words', () => {
    assert.equal(replaceLatinSmart('пOмилкa'), 'пОмилка')
    assert.equal(replaceLatinSmart('вiдПOвiдь'), 'відПОвідь')
  })

  it('converts Cyrillic letters in mostly Latin words', () => {
    assert.equal(replaceLatinSmart('Рack'), 'Pack')
    assert.equal(replaceLatinSmart('Іntеrnаtіоnаl'), 'International')
  })

  it('leaves purely Latin or Cyrillic words unchanged', () => {
    assert.equal(replaceLatinSmart('OpenAI is cool'), 'OpenAI is cool')
    assert.equal(replaceLatinSmart('Це перевірка'), 'Це перевірка')
  })

  it('handles mixed cases', () => {
    assert.equal(replaceLatinSmart('ОpenАI це дуже цiкaвий iнcтpyмeнт'), 'OpenAI це дуже цікавий інструмент')
  })

  it('handles edge cases gracefully', () => {
    assert.equal(replaceLatinSmart(''), '')
    assert.equal(replaceLatinSmart('123456'), '123456')
    assert.equal(replaceLatinSmart('!?.,'), '!?.,')
  })
})
