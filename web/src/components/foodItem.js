import React from 'react'
import styled from 'styled-components'

import PortableText from './portableText'

const FoodItem = ({name, price, additional_options, _rawDescription}) => (
  <Wrapper>
    <Name>
      {name}
      {' '}
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
  padding: 8px;
  white-space: noframes;
  font-size: 0.9rem;
`

const Name = styled.h3`
font-family: 'Big Shoulders Display';
  font-size: 1.2rem;
`

const Description = styled.div`
  position: relative;
  line-height: 1.15;
`

const Price = styled.span`
  font-weight: 600;

  &:before {
    content: '$';
  }
`
const OptPrice = styled.span`
  font-weight: 600;

  &:before {
    content: '$';
  }
`

const Options = styled.div`
  font-weight: 600;
`

export default FoodItem