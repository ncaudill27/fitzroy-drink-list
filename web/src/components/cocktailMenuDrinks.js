import React from 'react'
import styled from 'styled-components'

const DrinkList = ({drinks}) => (
  <Wrapper>
      {drinks.map(drink => (
        <article>
          <NamePrice>
            {drink.name} {drink.price}
          </NamePrice>
          <div>
            {drink.ingredients.map(i => i.name).join(', ')}
          </div>
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
  justify-content: center;
  gap: 20px;
  padding: 1in 1.5in;
  text-align: center;
`

const NamePrice = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 0.2em; 
`
export default DrinkList