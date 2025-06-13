import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceRuWithUk } from '../src/functions/replace-ru-with-uk.ts'

describe('replaceRuWithUk', () => {
  it('replaces Russian letters with Ukrainian equivalents', () => {
    assert.equal(replaceRuWithUk('Цыкавий'), 'Цікавий')
    assert.equal(replaceRuWithUk('Поъж ще цих солодких булочок'), 'Поїж ще цих солодких булочок')
  })
})
