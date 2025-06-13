import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { unifyHyphens } from '../src/functions/unify-hyphens.ts'

describe('unifyHyphens', () => {
  it('replaces all unicode hyphens with standard hyphen-minus', () => {
    const input = 'one–two—three―four−five‒six‐seven'
    const expected = 'one-two-three-four-five-six-seven'
    assert.equal(unifyHyphens(input), expected)
  })

  it('replaces double hyphen "--" with a single hyphen', () => {
    const input = 'pre--post'
    const expected = 'pre-post'
    assert.equal(unifyHyphens(input), expected)
  })

  it('does not change standard hyphen-minus', () => {
    const input = 'a-b-c'
    assert.equal(unifyHyphens(input), input)
  })

  it('handles mixed hyphen types correctly', () => {
    const input = 'a–b—c--d-e‒f'
    const expected = 'a-b-c-d-e-f'
    assert.equal(unifyHyphens(input), expected)
  })

  it('handles empty string', () => {
    assert.equal(unifyHyphens(''), '')
  })
})
