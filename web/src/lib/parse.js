import React from 'react'

export const parseAmount = amount => {
  let [first, second] = amount.split(' ')

  return <span>
    {convertFraction(first)}{convertFraction(second)}
  </span>
}

function convertFraction(number) {
  switch(number) {
    case '1/4': 
      return <>&frac14;</>

    case '1/2': 
      return <>&frac12;</>

    case '3/4': 
      return <>&frac34;</>

    case 'undefined':
      return ''

    default: 
      return number
  }
}
