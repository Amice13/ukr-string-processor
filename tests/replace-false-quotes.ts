import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceFalseQuotes } from '../src/functions/replace-false-quotes.ts'

describe('replaceFalseQuotes', () => {
  it('replaces paired Unicode-style single quotes with double quotes', () => {
    assert.equal(replaceFalseQuotes('Він сказав: ’’Привіт‘‘'), 'Він сказав: "Привіт"')
    assert.equal(replaceFalseQuotes('ʼʼТест′′'), '"Тест"')
    assert.equal(replaceFalseQuotes('``Тест``'), '"Тест"')
  })

  it('does not affect different symbols presented in a sequence', () => {
    assert.equal(replaceFalseQuotes('’‘Тест’‘'), '’‘Тест’‘')
  })

  it('does not replace valid double quotes', () => {
    assert.equal(replaceFalseQuotes('"Чудова цитата"'), '"Чудова цитата"')
  })

  it('does not replace unmatched single quotes or commas', () => {
    assert.equal(replaceFalseQuotes("Це 'ок'"), "Це 'ок'")
    assert.equal(replaceFalseQuotes('Просто, кома'), 'Просто, кома')
  })

  it('returns same string if no pattern matched', () => {
    assert.equal(replaceFalseQuotes('Жодних лапок.'), 'Жодних лапок.')
  })
})
