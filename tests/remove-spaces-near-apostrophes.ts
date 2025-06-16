import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { removeSpacesNearApostrophes } from '../src/functions/remove-spaces-near-apostrophes.ts'

describe('removeSpacesNearApostrophes', () => {
  it('replaces single Cyrillic letters with Latin lookalikes', () => {
    assert.equal(removeSpacesNearApostrophes('Сім\' я'), 'Сім\'я')
    assert.equal(removeSpacesNearApostrophes('Полум \'я'), 'Полум\'я')
  })
})
