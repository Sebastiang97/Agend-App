import { useState } from 'react'

export const useInput = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const onChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, onChange]
}
