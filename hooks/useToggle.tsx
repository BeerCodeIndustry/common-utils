import { useCallback, useEffect, useState } from 'react'

import { BooleanStringNumber } from '../types'

export type ReturnType = [BooleanStringNumber, ToggleType]
export type ToggleType = (val?: BooleanStringNumber) => void

export const useToggle = (
  initialValue: BooleanStringNumber = false,
  toggleBy: [BooleanStringNumber, BooleanStringNumber] = [false, true],
): ReturnType => {
  const [value, setValue] = useState<BooleanStringNumber>(initialValue)

  const verify = useCallback(
    (val: BooleanStringNumber) => {
      if (!toggleBy.includes(val)) {
        throw new Error('toggleBy doesnt contain value')
      }
    },
    [toggleBy],
  )

  const toggle = (val?: BooleanStringNumber): void => {
    if (val !== undefined) {
      verify(val)
      setValue(val)

      return
    }
    setValue(v => (v === toggleBy[0] ? toggleBy[1] : toggleBy[0]))
  }

  useEffect(() => {
    verify(initialValue)
  }, [initialValue, verify])

  return [value, toggle]
}
