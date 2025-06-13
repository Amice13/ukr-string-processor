import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { capitalize } from '../src/functions/capitalize.ts'

describe('capitalize', () => {
  it('capitalizes the first character and lowercases the rest', () => {
    assert.equal(capitalize('привіт'), 'Привіт')
    assert.equal(capitalize('аНдрій'), 'Андрій')
    assert.equal(capitalize('МИКОЛА'), 'Микола')
  })

  it('handles a single character', () => {
    assert.equal(capitalize('а'), 'А')
    assert.equal(capitalize('Б'), 'Б')
  })

  it('returns empty string unchanged', () => {
    assert.equal(capitalize(''), '')
  })

  it('handles already capitalized input correctly', () => {
    assert.equal(capitalize('Україна'), 'Україна')
  })
})
