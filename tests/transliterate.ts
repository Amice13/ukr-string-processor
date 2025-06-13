import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { transliterate } from '../src/functions/transliterate.ts'

describe('transliterate', () => {
  it('transliterates basic Ukrainian letters', () => {
    assert.equal(transliterate('Привіт'), 'Pryvit')
    assert.equal(transliterate('Київ'), 'Kyiv')
    assert.equal(transliterate('Дніпро'), 'Dnipro')
  })

  it('transliterates words with apostrophes', () => {
    assert.equal(transliterate("об'єкт"), 'obiekt')
    assert.equal(transliterate("п'єса"), 'piesa')
    assert.equal(transliterate("м’ясо"), 'miaso')
    assert.equal(transliterate("в‘юн"), 'viun')
    assert.equal(transliterate("бур’ян"), 'burian')
  })

  it('transliterates words with Зг/зг correctly', () => {
    assert.equal(transliterate('згода'), 'zghoda')
    assert.equal(transliterate('Згурівка'), 'Zghurivka')
    assert.equal(transliterate('ЗГАРДА'), 'ZGHARDA')
  })

  it('handles title-case specific rules for starting letters', () => {
    assert.equal(transliterate('Юрій'), 'Yurii')
    assert.equal(transliterate('Яків'), 'Yakiv')
    assert.equal(transliterate('Їжак'), 'Yizhak')
    assert.equal(transliterate('Європа'), 'Yevropa')
    assert.equal(transliterate('Йогурт'), 'Yohurt')
  })

  it('transliterates words with soft sign and other ignored letters', () => {
    assert.equal(transliterate('льон'), 'lon')
    assert.equal(transliterate('пальто'), 'palto')
  })

  it('handles sentence with punctuation and mixed cases', () => {
    const input = 'Юлія з’їла яблуко. Їжачок з’їв бур’ян.'
    const expected = 'Yuliia zila yabluko. Yizhachok ziv burian.'
    assert.equal(transliterate(input), expected)
  })

  it('handles foreign characters by leaving them unchanged', () => {
    assert.equal(transliterate('Google Україна'), 'Google Ukraina')
    assert.equal(transliterate('2023 рік'), '2023 rik')
  })
})
