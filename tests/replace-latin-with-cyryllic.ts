import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { replaceLatinWithCyryllic } from '../src/functions/replace-latin-with-cyryllic.ts'

describe('replaceLatinWithCyryllic', () => {
  it('replaces all supported uppercase Latin letters with Cyrillic equivalents', () => {
    assert.equal(replaceLatinWithCyryllic('ABCEHIKMOPTX'), 'АВСЕНІКМОРТХ')
  })

  it('replaces all supported lowercase Latin letters with Cyrillic equivalents', () => {
    assert.equal(replaceLatinWithCyryllic('aceiopyx'), 'асеіорух')
  })

  it('preserves unsupported Latin characters and non-alphabetic content', () => {
    assert.equal(replaceLatinWithCyryllic('DFGJLQRSUVWZ!?123'), 'DFGJLQRSUVWZ!?123')
  })

  it('returns empty string if input is empty', () => {
    assert.equal(replaceLatinWithCyryllic(''), '')
  })
})
