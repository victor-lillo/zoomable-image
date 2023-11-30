import { describe, expect, assertType, expectTypeOf, it, test } from 'vitest'

import init from '../src/zoomable-image'

test('Types work properly', () => {
  expectTypeOf(init).toBeFunction()

  assertType(init({ dataSelector: undefined }))
  assertType(init({ dataSelector: 'data-custom-selector' }))
})
