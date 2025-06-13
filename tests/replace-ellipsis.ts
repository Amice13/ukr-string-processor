import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceEllipsis } from '../src/functions/replace-ellipsis.ts'

describe('replaceEllipsis', () => {
  it('replaces plain ellipsis with single character', () => {
    assert.equal(replaceEllipsis('Wait...'), 'Wait…')
  })

  it('does not replace if preceded by a dot', () => {
    assert.equal(replaceEllipsis('...and then...'), '…and then…')
  })

  it('does not replace if followed by a dot', () => {
    assert.equal(replaceEllipsis('... ... ....'), '… … ....')
  })

  it('replaces only standalone three-dot ellipsis', () => {
    assert.equal(replaceEllipsis('One... Two... Three...'), 'One… Two… Three…')
  })

  it('leaves ellipsis character untouched', () => {
    assert.equal(replaceEllipsis('Wait…'), 'Wait…')
  })

  it('does not replace overlapping dots or sequences', () => {
    assert.equal(replaceEllipsis('....'), '....')
    assert.equal(replaceEllipsis('.. ..'), '.. ..')
  })

  it('returns the same string if no ellipsis found', () => {
    assert.equal(replaceEllipsis('No ellipsis here.'), 'No ellipsis here.')
  })
})
