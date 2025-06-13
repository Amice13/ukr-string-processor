import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { regexLatinToCyryllic } from '../src/functions/regex-latin-to-cyryllic.ts'

describe('regexLatinToCyryllic', () => {
  const shouldMatch = (latin: string, cyrSamples: string[]) => {
    const rx = regexLatinToCyryllic(latin)
    for (const word of cyrSamples) {
      assert.ok(word.match(rx) !== null, `Expected "${word}" to match "${rx}"`)
    }
  }

  it('matches "kharkiv" to х|кг pattern', () => {
    shouldMatch('kharkiv', ['Харків', 'Кгарків'])
  })

  it('matches "shche" to щ', () => {
    shouldMatch('shche', ['Ще'])
  })

  it('matches "yes" to є|йе|іе', () => {
    shouldMatch('yes', ['Єс', 'Йес', 'Іес'])
  })

  it('matches "zhanna" to ж|зг + анна', () => {
    shouldMatch('zhanna', ['Жанна', 'Зганна'])
  })

  it('matches "lia" to я|іа|їа', () => {
    shouldMatch('lia', ['Ля', 'Ліа', 'Лїа'])
  })

  it('handles final softness "den"', () => {
    shouldMatch('den', ['День', 'Ден'])
  })

  it('handles special case "rізb"', () => {
    shouldMatch('rizb', ['Різьба', 'Різба'])
  })

  it('handles softened middle consonants "tsl"', () => {
    shouldMatch('tsl', ['тьсл', 'тсл'])
  })

  it('matches vowels like "iu" and "ie"', () => {
    shouldMatch('liubie', ['любє', 'любйе', 'любіе', 'любїе'])
  })

  it('supports mixed cases and still matches', () => {
    shouldMatch('Kharkiv', ['харків', 'Кгарків'])
    shouldMatch('ZGH', ['Зг'])
    shouldMatch('ZH', ['Ж'])
  })
})