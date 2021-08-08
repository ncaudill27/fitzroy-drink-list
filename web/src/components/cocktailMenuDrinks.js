import React from 'react'
import styled from 'styled-components'

const DrinkList = ({drinks}) => (
  <Wrapper>
    {drinks.map(drink => (
      <article>
        <NamePrice>
          {drink.name}  <Price>{drink.price}</Price>
        </NamePrice>
        <Ingredients>
          {drink.ingredients.map(i => i.name).join(', ')}
        </Ingredients>
      </article>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  position: absolute;
  width: 6.625in; /* 5/8" */
  height: 8in;
  bottom: 1.125in; /* 1/16" */
  right: 0.9375in; /* 15/16" */
  border: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.625in 1.5in;
  text-align: center;
`

const NamePrice = styled.div`
  font-family: 'Big Shoulders Display', sans-serif;
  font-weight: 500;
  font-size: 22px;
  text-transform: uppercase;
  white-space: pre-wrap;
`

const Price = styled.span`
  font-weight: 600;
  color: hsl(357, 74%, 28%);
`

const Ingredients = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: hsl(0, 0%, 30%);
  font-weight: 300;
  font-size: 15px;
`
export default DrinkList
