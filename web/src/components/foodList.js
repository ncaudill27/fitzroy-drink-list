import React from 'react'
import styled from 'styled-components'

import FoodStack from './foodStack'

const FoodList = ({food, ...props}) => {
  
  const m = Math.ceil(food.length / 2);

  const firstHalf = food.slice(0, m)
  const secondHalf = food.slice(m, food.length)

  return (
    <Wrapper {...props}>
      <FoodStack list={firstHalf} />
      <FoodStack list={secondHalf} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: 64px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

FoodList.defaultProps = {
  foodList: []
}

export default FoodList