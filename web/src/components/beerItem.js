import React from 'react'
import styled from 'styled-components'

const BeerItem = ({
  brewery,
  name,
  price,
  style,
}) => (
  <Wrapper>
    <NamePrice>
      <Name>{name}</Name>
      <DottedLine />
      <Price>{price}</Price>
    </NamePrice>
    <StyleBrewery>
      <Style>{style}</Style>
      <Brewery>{brewery}</Brewery>
    </StyleBrewery>
  </Wrapper>
)

const Wrapper = styled.article`
  margin-bottom: 4px;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`

const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.span`
  text-transform: uppercase;
  font-weight: 600;
`

const Price = styled.span`
  font-weight: 600;
  color: hsl(357, 74%, 28%);
`

const DottedLine = styled.div`
  flex-grow: 1;
  border-bottom: 1px dotted;
`

const StyleBrewery = styled.div`
  display: flex;
  font-family: 12px;
  justify-content: space-between;
`

const Style = styled.div`
`

const Brewery = styled.div`
  margin-left: 8px;
  text-align: right;
  color: hsl(0, 0%, 30%);
`

export default BeerItem