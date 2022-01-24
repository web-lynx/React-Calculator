import React from 'react'

export const Button = ({ value, calculatorClick }) => {
  return <button onClick={() => calculatorClick(value.val)} id={(value.val)}>{value.displayVal ? value.displayVal : value.val}</button>
}
