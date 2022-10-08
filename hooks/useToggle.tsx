import { useEffect, useState } from 'react'

import { BooleanString } from '../types'

export type ReturnType = [BooleanString, () => void]

export const useToggle = (
  initialValue: string | boolean = false,
  toggleBy: [BooleanString, BooleanString] = [false, true],
): ReturnType => {
  const [value, setValue] = useState(initialValue)

  const toggle = (): void => {
    setValue(v => (v === toggleBy[0] ? toggleBy[1] : toggleBy[0]))
  }

  useEffect(() => {
    if (!toggleBy.includes(initialValue))
      throw new Error('toggleBy doesnt contain initial value')
  }, [initialValue, toggleBy])

  return [value, toggle]
}
