import React from 'react'
import styled from 'styled-components'

import Header from './cocktailMenuHeader'

const CocktailMenu = ({drinks}) => (
  <LetterheadWrapper>
    <Header />
    <MainWrapper>
      {drinks.map(drink => {
        console.log(drink)
        return (
          <div>
            <div>
              {drink.name} {drink.price}
            </div>
            <div>
              {drink.ingredients.map(i => i.name).join(', ')}
            </div>
          </div>
        )
      })}
    </MainWrapper>
  </LetterheadWrapper>
)

const LetterheadWrapper = styled.div`
  width: 8.5in;
  height: 11in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border: 1px solid;
`

const MainWrapper = styled.div`
  position: absolute;
  width: calc(6.625in - 2in); /* 5/8" */
  height: calc(8in - 2in);
  bottom: 1.0626in; /* 1/16" */
  right: 0.9375in; /* 15/16" */
  border: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1in;
  text-align: center;
`

export default CocktailMenu