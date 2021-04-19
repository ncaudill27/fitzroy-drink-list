import React from 'react'
import styled from 'styled-components'

import Header from './cocktailMenuHeader'
import DrinkList from './cocktailMenuDrinks'

const CocktailMenu = React.forwardRef( ({drinks}, ref) => (
  <LetterheadWrapper ref={ref}>
    <Header />
    <DecorativeBox />
    <DrinkList drinks={drinks} />
  </LetterheadWrapper>
))

const LetterheadWrapper = styled.div`
  width: 8.5in;
  height: 11in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`

const DecorativeBox = styled.div`
  position: absolute;
  width: 6.25in;
  height: 8.25in;
  right: 1.125in;
  bottom: 0.9375in;
  border: 1px solid;
`

export default CocktailMenu