import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { fixRomeNumbers } from '../src/functions/fix-rome-numbers.ts'

describe('fixRomeNumbers', () => {
  it('replaces Ukrainian characters with the proper ones', () => {
    assert.equal(fixRomeNumbers('ХХІ'), 'XXI')
    assert.equal(fixRomeNumbers('ХСVІІІ'), 'XCVIII')
  })

  it('does not change the strings which are not Roman numbers', () => {
    assert.equal(fixRomeNumbers('МІМІМІ'), 'МІМІМІ')
  })

  it('does not change the strings when only one character is present', () => {
    assert.equal(fixRomeNumbers('М І М І М І'), 'М І М І М І')
  })
})
