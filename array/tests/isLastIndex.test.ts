import { isLastIndex } from '../isLastIndex'

describe('isLastIndex', () => {
  test('Arr with 3 elements', () => {
    const arr3 = [1, 2, 3]

    expect(isLastIndex(arr3, 0)).toEqual(false)
    expect(isLastIndex(arr3, 1)).toEqual(false)
    expect(isLastIndex(arr3, 2)).toEqual(true)
  })

  test('Arr with 0 elements', () => {
    const arr0: unknown[] = []

    expect(isLastIndex(arr0, 0)).toEqual(false)
    expect(isLastIndex(arr0, 1)).toEqual(false)
  })
})
