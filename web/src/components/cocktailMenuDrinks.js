import React from 'react'
import styled from 'styled-components'

const DrinkList = ({drinks}) => (
  <Wrapper>
    {drinks.map(drink => (
      <article>
        <NamePrice>
          {drink.name}  {drink.price}
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
  width: calc(6.625in - 3in); /* 5/8" */
  height: calc(8in - 2in);
  bottom: 1.0626in; /* 1/16" */
  right: 0.9375in; /* 15/16" */
  border: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1in 1.5in;
  text-align: center;
`

const NamePrice = styled.div`
  font-family: 'Big Shoulders Display', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  text-transform: uppercase;
  white-space: pre-wrap;
`

const Price = styled.span`
  font-family: 'Open Sans', sans-serif;
`

const Ingredients = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: hsl(0, 0%, 30%);
  font-weight: 300;
`
export default DrinkList