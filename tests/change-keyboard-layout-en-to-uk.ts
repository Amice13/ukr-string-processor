import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { changeKeyboardLayoutEnToUk } from '../src/functions/change-keyboard-layout-en-to-uk.ts'

describe('changeKeyboardLayoutEnToUk', () => {
  it('changes the layout properly', () => {
    assert.equal(changeKeyboardLayoutEnToUk('Ckfdf Erhf]ys'), 'Слава Україні')
  })
})
