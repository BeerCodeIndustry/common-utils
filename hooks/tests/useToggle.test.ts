import { act, renderHook } from '@testing-library/react'

import { useToggle } from '../useToggle'

describe('useToggle true/false', () => {
  test('Test default toggle', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current[0]).toEqual(false)

    act(() => result.current[1]())

    expect(result.current[0]).toEqual(true)

    act(() => result.current[1]())

    expect(result.current[0]).toEqual(false)
  })

  test('Test initial value toggle', () => {
    const { result } = renderHook(() => useToggle(true))

    expect(result.current[0]).toEqual(true)

    act(() => result.current[1]())

    expect(result.current[0]).toEqual(false)

    act(() => result.current[1]())

    expect(result.current[0]).toEqual(true)
  })

  test('Test set value toggle', () => {
    const { result } = renderHook(() => useToggle())

    act(() => result.current[1](false))

    expect(result.current[0]).toEqual(false)

    act(() => result.current[1]())
    act(() => result.current[1](true))

    expect(result.current[0]).toEqual(true)
  })
})

describe('useToggle custom', () => {
  test('Test numbers toggle', () => {
    const { result } = renderHook(() => useToggle(1, [1, 2]))

    expect(result.current[0]).toEqual(1)

    act(() => result.current[1]())

    expect(result.current[0]).toEqual(2)

    act(() => result.current[1]())

    expect(result.current[0]).toEqual(1)
  })

  test('Test strings toggle', () => {
    const { result } = renderHook(() => useToggle('s', ['s', 'v']))

    expect(result.current[0]).toEqual('s')

    act(() => result.current[1]())

    expect(result.current[0]).toEqual('v')

    act(() => result.current[1]())

    expect(result.current[0]).toEqual('s')
  })
})
