import React from 'react'
import styled from 'styled-components'

import FoodStack from './foodStack'

const FoodList = ({list, ...props}) => {
  
  const m = Math.ceil(list.length / 2);

  const firstHalf = list.slice(0, m)
  const secondHalf = list.slice(m, list.length)

  return (
    <Wrapper {...props}>
      <FoodStack list={firstHalf} />
      <FoodStack list={secondHalf} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

export default FoodList