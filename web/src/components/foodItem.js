import React from 'react'
import styled from 'styled-components'

import PortableText from './portableText'

const FoodItem = ({name, price, additional_options, _rawDescription}) => (
  <Wrapper>
    <Name>
      {name}
      .....
      { price && <Price>{price}</Price> }
    </Name>
    <Description>
      <PortableText blocks={_rawDescription} />
    </Description>
    <Options>
      {additional_options.map(({price, context}) => (
        <div key={context}>
          {context}
          {' '}
          {price && <OptPrice>{price}</OptPrice>}
          {' '}
        </div>
      ))}
    </Options>
  </Wrapper>

)

const Wrapper = styled.article`
  font-size: 0.9rem;
  
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  #barmenu & {
    display: flex;
    height: 100%;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 2px;
    }
  }
`

const Name = styled.h3`
  font-family: 'Big Shoulders Display';
  font-size: 1.25rem;
  text-transform: uppercase;
`

const Description = styled.div`
  line-height: 1.15;
  color: hsl(0, 0%, 30%);
`

const Price = styled.span`
  font-weight: 600;
  color: hsl(357, 74%, 28%);
`
const OptPrice = styled.span`
  font-weight: 600;
  color: hsl(357, 74%, 28%);
`

const Options = styled.div`
  font-weight: 600;
`

export default FoodItem