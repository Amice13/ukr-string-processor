import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { fixSpacesNearPunctuations } from '../src/functions/fix-spaces-near-punctuations.ts'

describe('fixSpacesNearPunctuations', () => {
  it('removes spaces before punctuation', () => {
    assert.equal(fixSpacesNearPunctuations('Привіт , світ !'), 'Привіт, світ!')
    assert.equal(fixSpacesNearPunctuations('Тестовий : випадок ; спрацює ?'), 'Тестовий: випадок; спрацює?')
  })

  it('removes space before quotation followed by punctuation', () => {
    assert.equal(fixSpacesNearPunctuations('Бонд, Джеймс Бонд" , сказав він.'), 'Бонд, Джеймс Бонд", сказав він.')
  })

  it('adds missing space after certain punctuation', () => {
    assert.equal(fixSpacesNearPunctuations('Воу!О це так-так!Дійсно!'), 'Воу! О це так-так! Дійсно!')
  })

  it('adds space after punctuation in Cyrillic cases', () => {
    assert.equal(fixSpacesNearPunctuations('тест,тест'), 'тест, тест')
    assert.equal(fixSpacesNearPunctuations('приклад)тест'), 'приклад) тест')
  })

  it('inserts space between abbreviations and following capitalized words', () => {
    assert.equal(fixSpacesNearPunctuations('м.Львів'), 'м. Львів')
    assert.equal(fixSpacesNearPunctuations('гр.Тарас'), 'гр. Тарас')
  })

  it('inserts space after dash at beginning of line in Ukrainian text (useful for lists)', () => {
    assert.equal(fixSpacesNearPunctuations('\n-привіт'), '\n- привіт')
  })

  it('removes space after opening brackets or parenthesis', () => {
    assert.equal(fixSpacesNearPunctuations('( Шевченко, 1840)'), '(Шевченко, 1840)')
    assert.equal(fixSpacesNearPunctuations('[ текст]'), '[текст]')
  })

  it('removes space after № and # before digits', () => {
    assert.equal(fixSpacesNearPunctuations('№ 5'), '№5')
    assert.equal(fixSpacesNearPunctuations('# 123'), '#123')
  })

  it('adds space before specific characters when needed', () => {
    assert.equal(fixSpacesNearPunctuations('"Мені тринадяций минало"(текст)'), '"Мені тринадяций минало" (текст)')
    assert.equal(fixSpacesNearPunctuations('Законопроект#123'), 'Законопроект #123')
  })

  it('works with combined edge cases', () => {
    const input = '№ 5( текст) " ,так."м.Київ,це-тест!Справді!# 12'
    const expected = '№5 (текст)", так. "м. Київ, це-тест! Справді! #12'
    assert.equal(fixSpacesNearPunctuations(input), expected)
  })
})